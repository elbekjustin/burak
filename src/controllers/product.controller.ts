import express, {Request, Response} from "express";
import Errors, { HttpCode, Message } from "../libs/type/Errors";
import { T } from "../libs/type/common";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/type/member";
import { ProductInput, productInquiry } from "../libs/type/product";
import { ProductCollection } from "../libs/type/enums/product.enum";

const productService = new ProductService();
const productController: T = {};

/** SPA */

productController.getProducts = async (req: Request, res: Response) => {
    try {
      console.log("getProducts");
      const { page, limit, order, productCollection, search } = req.query;
      const inquiry: productInquiry = {
          order: String(order),
          page: Number(page),
          limit: Number(limit),
          search: ""
      };
      
      if (productCollection) {
        inquiry.productCollection = productCollection as ProductCollection;
      }
      if (search) inquiry.search = String(search);
  
      const result = await productService.getProducts(inquiry);
  
      res.status(HttpCode.OK).json(result);
    } catch (err) {
      console.log("Error, getProducts:", err);
      if (err instanceof Errors)
        res.status(err.code).json(err);
      else
        res.status(Errors.standard.code).json(Errors.standard);
    }
  };
  
  productController.getProduct = async (req: ExtendedRequest, res: Response) => {
    try {
      console.log("getProduct");
      const { id } = req.params;
      const memberId = req.member?._id ?? null;
      const result = await productService.getProduct(memberId, id);
  
      res.status(HttpCode.OK).json(result);
    } catch (err) {
      console.log("Error, getProduct:", err);
      if (err instanceof Errors)
        res.status(err.code).json(err);
      else
        res.status(Errors.standard.code).json(Errors.standard);
    }
  };
  

/** SSR */

productController.getAllProducts = async (req:Request, res: Response) => {
    try{
    console.log("getAllProducts");
    const date = await productService.getAllProducts();
    console.log("products", date);
    res.render("products", { products: date});
  
    } catch (err) {
        console.log("ERROR, getAllProducts:", err);  
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
    };

    productController.createNewProduct = async (req: AdminRequest, res: Response) => {
        try{
        console.log("createNewProduct");
        console.log("req.body:", req.body);
        if (!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const date: ProductInput = req.body;
        date.productImages = req.files?.map((ele) => {
            return ele.path;
        });

        await productService.createNewProduct(date);

        console.log("date:", date);
        
        res.send(
           `<script> alert("Sucessful creation!"); window.location.replace('/admin/product/all') </script>`
        );

        } catch (err) {
            console.log("ERROR, createNewProduct:", err);  
            const message = 
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
            res.send(
                `<script> alert("${message}"); window.location.replace('/admin/product/all') </script>`
             );
        }
        };

        productController.updateChosenProduct = async (req: Request, res: Response) => {
            try{
            console.log("updateChosenProduct");
             const id = req.params.id;
          
             const result = await productService.updateChosenProduct(id, req.body);

             res.status(HttpCode.OK).json({ date: result });
            } catch (err) {
                console.log("ERROR, updateChosenProduct:", err);  
                if(err instanceof Errors) res.status(err.code).json(err);
                else res.status(Errors.standard.code).json(Errors.standard);
            }
            };

export default productController;

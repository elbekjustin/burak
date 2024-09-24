import { Product, ProductInput } from "../libs/type/product";
import ProductModel from "../schema/Product.model";
import { HttpCode } from "../libs/type/Errors";
import { Message } from "../libs/type/Errors";
import Errors from "../libs/type/Errors";


class ProductService {
private readonly productModel;
    static createNewProduct: any;

constructor() {
    this.productModel = ProductModel;
}

/** SPA */

/** SSR */

public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
       return await this.productModel.create(input);
    } catch (err) {
        console.log("ERROR, model:createNewProduct:", err);  
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    }
  }  
}
export default ProductService;
import { 
  Product, 
  ProductInput, 
  productInquiry, 
  ProductUpdateInput
 } from "../libs/type/product";
import ProductModel from "../schema/Product.model";
import { HttpCode } from "../libs/type/Errors";
import { Message } from "../libs/type/Errors";
import Errors from "../libs/type/Errors";
import { shapeIntoMongooseObjectId } from "../libs/type/config";
import { ProductStatus } from "../libs/type/enums/product.enum";
import { T } from "../libs/type/common";


class ProductService {
private readonly productModel;
    static createNewProduct: any;
    res: any;

constructor() {
    this.productModel = ProductModel;
}

/** SPA */

public async getProducts(inquiry: productInquiry): Promise<Product[]> {
  const match: T = { productStatus: ProductStatus.PROCESS };

  if (inquiry.productCollection) {
    match.productCollection = inquiry.productCollection;
  }
  if (inquiry.search) {
    match.productName = { $regex: new RegExp(inquiry.search, "i") };
  }

  const sort: T = inquiry.order === "productPrice"
    ? { [inquiry.order]: 1 }
    : { [inquiry.order]: -1 };

  const result = await this.productModel
    .aggregate([
      { $match: match },
      { $sort: sort },
      { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
      { $limit: inquiry.limit * 1 },
    ])
    .exec();

  if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

  return result;
}

public async getProduct(
  memberId: Object | null,
  id: string
): Promise<Product> {
  const productId = shapeIntoMongooseObjectId(id);

  let result = await this.productModel
    .findOne({
      _id: productId,
      productStatus: ProductStatus.PROCESS,
    })
    .exec();

  if (!result)
    throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

  return result;
}



/** SSR */

public async getAllProducts(): Promise<Product[]> {

const result = await  this.productModel
.find().exec();
if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

return result;
  }  

public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
       return await this.productModel.create(input);
    } catch (err) {
        console.log("ERROR, model:createNewProduct:", err);  
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    }
  }  

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
): Promise<Product> {
// string => ObjectId
id = shapeIntoMongooseObjectId(id);
const result = await  this.productModel
.findOneAndUpdate({ _id: id }, input, {new: true})
.exec();
if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.UPDATE_FAILED);

return result;
  }  

}
export default ProductService;
import { Product, ProductInput, ProductUpdateInput } from "../libs/type/product";
import ProductModel from "../schema/Product.model";
import { HttpCode } from "../libs/type/Errors";
import { Message } from "../libs/type/Errors";
import Errors from "../libs/type/Errors";
import { shapeIntoMongooseObjectId } from "../libs/type/config";


class ProductService {
private readonly productModel;
    static createNewProduct: any;
    res: any;

constructor() {
    this.productModel = ProductModel;
}

/** SPA */

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
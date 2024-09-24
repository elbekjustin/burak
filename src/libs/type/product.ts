import { 
    ProductCollection, 
    ProductSize, 
    ProductStatus, 
    ProductVolume } from "./enums/product.enum";

export interface Product {
    _id: Object;
    productStatus: ProductStatus;
    productColection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: ProductVolume;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productColection?: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: ProductVolume;
    productDesc?: string;
    productImages?: string[];
    productViews: number;
}
import { Document } from "mongoose";

import productStatus from "./productStatus";

export default interface IProduct extends Document {
    title: string,
    price: number,
    salePrice:number,
    thumbnail: string,
    gallery?: [string],
    createdAt: Date,
    updateAt: Date,
    status: productStatus,
}
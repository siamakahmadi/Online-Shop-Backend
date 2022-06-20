import { Document } from "mongoose";

export default interface IOrderLines extends Document {
    order: object,
    price: number,
    product: object,
    createdAt: Date,
}
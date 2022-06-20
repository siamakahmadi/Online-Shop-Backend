import { Document } from "mongoose";

export default interface IOrder extends Document {
    user: object,
    totalPrice: number,
    coupon: object,
    finalPrice: number,
    status: number,
    createdAt: Date,
    updateAt: Date
}
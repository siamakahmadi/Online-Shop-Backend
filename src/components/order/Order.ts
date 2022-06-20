import { Schema, model } from "mongoose";

import IOrder from "./IOrder";

const orderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    totalPrice: { type: Number, require: true },
    coupon: { type: Object, default: null },
    finalPrice: { type: Number, require: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})

export default model<IOrder>('order', orderSchema);
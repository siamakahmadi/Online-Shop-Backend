import { Schema } from "mongoose";

const orderLinesSchema: Schema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    price: { type: Number, required: true },
    craetedAt: { type: Date, default: Date.now }
})

export default orderLinesSchema;
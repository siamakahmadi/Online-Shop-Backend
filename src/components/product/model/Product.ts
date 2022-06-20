import { model, Schema } from "mongoose";

import IProduct from "./IProduct";
import productStatus from "./productStatus";


const productSchema: Schema = new Schema({

    title: { type: String, require: true },
    price: { type: String, require: true },
    salePrice: { type: Number, default: 0 },
    thumbnail: { type: String },
    gallery: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    // status: { type: productStatus, default: productStatus.INIT },

})


export default model<IProduct>('Product', productSchema);
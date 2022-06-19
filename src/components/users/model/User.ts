import { model } from "mongoose";
import { Schema } from "mongoose";

import IUser from "./IUser";


const userSchema: Schema = new Schema({
    firstName: { type: String },
    lastName: { tyoe: String },
    emial: { type: String},
    mobile: { type: String },
    totalOrder: { type: Number },
    walle: { type: Number },
    createdAt: { type: Date, default: Date.now() }

})

export default model<IUser>('user',userSchema);
import { model, Schema } from "mongoose";

import IUser from "./IUser";


const userSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { tyoe: String, required: true },
    emial: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    totalOrder: { type: Number, default: 0 },
    walle: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() }

})

export default model<IUser>('user',userSchema);
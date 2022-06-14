import { Document } from "mongoose";


export default interface IUser extends Document {

    firstName: string,
    lastName: string,
    emial: string,
    mobile: string,
    totalOrder: number,
    walle: number,
    createdAt: Date

}
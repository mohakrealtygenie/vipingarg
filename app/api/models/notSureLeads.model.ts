import mongoose from "mongoose";
import { INotSure } from "../Utils/FormInterfaces";

export interface INotSureLead extends INotSure {
    createdAt: Date;
}
const notSureLeadSchema = new mongoose.Schema<INotSureLead>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    leadDescription: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export const NotSureLead = mongoose.model<INotSureLead>('NotSureLead', notSureLeadSchema);


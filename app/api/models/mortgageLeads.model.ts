import mongoose from "mongoose";
import { IMortgage } from "../Utils/FormInterfaces";

export interface IMortgageLead extends IMortgage {
    createdAt: Date;
}
const mortgageLeadSchema = new mongoose.Schema<IMortgageLead>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    lookingFor: {type: String, required: true},
    propertyValue: {type: String, required: true},
    downPayment: {type: String, required: true},
    creditRange: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export const MortgageLead = mongoose.model<IMortgageLead>('MortgageLead', mortgageLeadSchema);

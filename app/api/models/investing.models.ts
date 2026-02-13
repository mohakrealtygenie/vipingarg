import { IInvesting } from "../Utils/FormInterfaces";
import mongoose from "mongoose";

export interface IInvestingLead extends IInvesting {
    createdAt: Date;
}
const investingLeadSchema = new mongoose.Schema<IInvestingLead>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    province: {type: String, required: true},
    accreditedInvestor: {type: Boolean, required: true},
    investmentRange: {type: String, required: true},
    timeline: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export const InvestingLead = mongoose.model<IInvestingLead>('InvestingLead', investingLeadSchema);  
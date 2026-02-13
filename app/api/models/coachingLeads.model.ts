import mongoose from "mongoose";
import { ICoaching } from "../Utils/FormInterfaces";

export interface ICoachingLead extends ICoaching {
    createdAt: Date;
}
const coachingLeadSchema = new mongoose.Schema<ICoachingLead>({
    exam: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    targetTimeline: {type: String, required: true},
    location: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});
export const CoachingLead = mongoose.model<ICoachingLead>('CoachingLead', coachingLeadSchema);
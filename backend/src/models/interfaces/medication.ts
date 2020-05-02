import { Document } from "mongoose";
import IUser from "./user";

export default interface IMedication extends Document {
    title: string;
    dosage: string;
    date: Date;
    user: string | IUser;
}

export interface MedParams {
    title: string;
    dosage: string;
    date: Date;
}
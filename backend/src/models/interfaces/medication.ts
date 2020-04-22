import { Document } from "mongoose";
import IUser from "./user";

export default interface IMedication extends Document {
    name: string;
    dosage: string;
    date: Date;
    user: string | IUser;
}

export interface MedParams {
    name: string;
    dosage: string;
    date: Date;
}
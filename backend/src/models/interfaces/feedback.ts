import { Document } from "mongoose";
import IUser from "./user";

export default interface IFeedback extends Document {
    feedback: string;
    date: Date;
    user: string | IUser;
}

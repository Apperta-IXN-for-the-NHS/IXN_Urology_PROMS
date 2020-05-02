import { Document } from "mongoose";
import IUser from "./user";

interface IReading extends Document {
  title: string;
  date: Date;
  completed?: boolean;
  user: string | IUser;
}

export default IReading;

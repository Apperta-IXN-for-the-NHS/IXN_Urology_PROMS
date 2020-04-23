import { Document } from "mongoose";
import IUser from "./user";

export default interface IResult extends Document {
  name: string; // name of result e.g. PSA, MRI
  score: number;
  date: Date;
  user: string | IUser;
}

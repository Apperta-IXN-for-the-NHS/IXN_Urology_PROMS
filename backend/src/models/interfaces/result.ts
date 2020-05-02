import { Document } from "mongoose";
import IUser from "./user";

export default interface IResult extends Document {
  name: "IPSS" | "PSA" | "IIEF"; // name of result e.g. PSA, MRI
  score: number;
  date: Date;
  unit?: string;
  user: string | IUser;
}

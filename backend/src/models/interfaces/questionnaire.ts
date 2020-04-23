import { Document } from "mongoose";
import IUser from "./user";

export default interface IQuestionnaire extends Document {
  title: string;
  responses: { question: string, answer: string, answerScore?: number}[];
  score?: number;
  date: Date;
  user: string | IUser;
}

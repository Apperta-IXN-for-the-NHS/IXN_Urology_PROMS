import { Model, model, Schema } from "mongoose";
import mongooseAutopopulate from "mongoose-autopopulate";
import IResult from "./interfaces/result";
const ResultSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
  unit: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User", autopopulate: false },
});

ResultSchema.plugin(mongooseAutopopulate);

const resultModel: Model<IResult> = model<IResult>("Result", ResultSchema);

export default resultModel;

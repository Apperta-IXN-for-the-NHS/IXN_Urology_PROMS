import { Model, model, Schema } from "mongoose";
import mongooseAutopopulate from "mongoose-autopopulate";
import IReading from "./interfaces/reading";

const ReadingSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User", autopopulate: false },
});

ReadingSchema.plugin(mongooseAutopopulate);

const readingModel: Model<IReading> = model<IReading>("Reading", ReadingSchema);

export default readingModel;

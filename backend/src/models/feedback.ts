import { Model, model, Schema } from "mongoose";
import mongooseAutopopulate from "mongoose-autopopulate";
import IFeedback from "./interfaces/feedback";

const FeedbackSchema = new Schema({
  feedback: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  user: { type: Schema.Types.ObjectId, ref: "User", autopopulate: true },
});

FeedbackSchema.plugin(mongooseAutopopulate);

const feedbackModel: Model<IFeedback> = model<IFeedback>(
  "Feedback",
  FeedbackSchema
);

export default feedbackModel;

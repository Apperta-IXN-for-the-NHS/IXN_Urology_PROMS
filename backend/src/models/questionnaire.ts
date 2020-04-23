import { Model, model, Schema } from "mongoose";
import mongooseAutopopulate from "mongoose-autopopulate";
import IQuestionnaire from "./interfaces/questionnaire";

const ResponseSubSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    answerScore: { type: Number },
  },
  { _id: false }
);

const QuestSchema = new Schema({
  title: { type: String, required: true },
  responses: [ResponseSubSchema],
  date: { type: Date, default: Date.now() },
  user: { type: Schema.Types.ObjectId, ref: "User", autopopulate: false },
});

QuestSchema.plugin(mongooseAutopopulate);

const questModel: Model<IQuestionnaire> = model<IQuestionnaire>(
  "Questionnaire",
  QuestSchema
);

export default questModel;

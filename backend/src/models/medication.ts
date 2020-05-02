import { Model, model, Schema } from "mongoose";
import mongooseAutopopulate from "mongoose-autopopulate";
import IMedication from "./interfaces/medication";

const MedicationSchema = new Schema({
  title: { type: String, required: true },
  dosage: { type: String, required: true },
  date: { type: Date, default: Date.now()},
  user: { type: Schema.Types.ObjectId, ref: "User", autopopulate: false },
});

MedicationSchema.plugin(mongooseAutopopulate);

const medicationModel: Model<IMedication> = model<IMedication>(
  "Medication",
  MedicationSchema
);

export default medicationModel;

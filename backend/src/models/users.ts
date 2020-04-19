import mongoose, { Model, model, Schema } from "mongoose";
import IUser from "./interfaces/user";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  kind: { type: String, required: true },
  hospital: { type: String },
});

const userModel: Model<IUser> = model<IUser>("User", UserSchema);

export default userModel;
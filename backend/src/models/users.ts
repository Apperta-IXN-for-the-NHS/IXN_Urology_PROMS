import mongoose, { Model, model, Schema } from "mongoose";
import Joi from "@hapi/joi";
import IUser from "./interfaces/user";
import { lstatSync } from "fs";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  phone: { type: String, required: true },
  address: { type: String, required: true },
  kind: { type: String, required: true },
  hospital: { type: String },
});

export const userValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string()
})


const userModel: Model<IUser> = model<IUser>("User", UserSchema);

export default userModel;
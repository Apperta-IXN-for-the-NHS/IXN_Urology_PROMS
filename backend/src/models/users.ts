import { Model, model, Schema } from "mongoose";
import IUser from "./interfaces/user";

const AddressSubSchema = new Schema(
  {
    addressOne: { type: String, required: true },
    addressTwo: { type: String, required: false },
    city: { type: String, required: true },
    county: { type: String, required: true },
    postcode: { type: String, required: true },
  },
  { _id: false }
);

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, required: true },
  address: AddressSubSchema,
  kind: { type: String, required: true },
  hospital: { type: String },
});

const userModel: Model<IUser> = model<IUser>("User", UserSchema);

export default userModel;

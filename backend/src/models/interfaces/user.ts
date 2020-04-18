import { Document } from "mongoose";

export default interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  kind: string; // whether user is patient or doctor
  hospital?: string;
}

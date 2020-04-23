import { Document } from "mongoose";

export default interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: string; // hashed password
  email: string;
  phone: string;
  address: string;
  kind: 'patient' | 'doctor'; // whether user is patient or doctor
  hospital?: string;
}

import userModel from "../models/users";
import IUser from "../models/interfaces/user";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

export async function getAllUsers() {
  return await userModel.find({kind: "patient"}).select("-password");
}

export async function getUserById(id: string) {
  return await userModel.findById(id).select("-password");
}

export async function updateUser(userParams: IUser, id: string) {
  const user = await getUserById(id);
  if (!user) throw "User not found";
  // user is changing password
  if (userParams.password) {
    const newHash = bcrypt.hashSync(userParams.password, 10);
    userParams.password = newHash;
  }
  const updatedUser = await userModel.findByIdAndUpdate(id, userParams, {
    new: true,
    select: "-password",
  });
  return updatedUser;
}

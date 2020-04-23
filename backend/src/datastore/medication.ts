import medicationModel from "../models/medication";
import { MedParams } from "../models/interfaces/medication";

export async function getAllMeds() {
  return await medicationModel.find();
}

export async function getMedbyId(id: string) {
  return await medicationModel.findById(id);
}

export async function getUserMeds(userId: string) {
  return await medicationModel.find({ user: userId });
}

export async function createMed(id: string, medParams: MedParams) {
  const fullParams = { user: id, ...medParams };
  const newMed = new medicationModel(fullParams);
  return await newMed.save();
}

export async function removeMed(id: string) {
  const medExist = await getMedbyId(id);
  if (!medExist) throw "No medication with that id";
  await medicationModel.findByIdAndDelete(id);
}

export async function updateMed(id: string, medParams: MedParams) {
  const medExist = await getMedbyId(id);
  if (!medExist) throw "No medication with that id";
  const updatedMed = await medicationModel.findByIdAndUpdate(id, medParams, {
    new: true,
  });
  return updatedMed;
}
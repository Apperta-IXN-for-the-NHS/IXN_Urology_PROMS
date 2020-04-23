import { Router } from "express";
import medicationModel from "../models/medication";
import { MedParams } from "../models/interfaces/medication";
import auth from "../common/auth";

const router = Router();

async function getAll() {
  return await medicationModel.find();
}

async function getMedbyId(id: string) {
  return await medicationModel.findById(id);
}

async function getUserMeds(userId: string) {
  return await medicationModel.find({ user: userId });
}

async function create(id: string, medParams: MedParams) {
  const fullParams = { user: id, ...medParams };
  console.log(fullParams);
  const newMed = new medicationModel(fullParams);
  return await newMed.save();
}

async function remove(id: string) {
  const medExist = await getMedbyId(id);
  if (!medExist) throw "No medication with that id";
  await medicationModel.findByIdAndDelete(id);
}

async function update(id: string, medParams: MedParams) {
  const medExist = await getMedbyId(id);
  if (!medExist) throw "No medication with that id";
  const updatedMed = await medicationModel.findByIdAndUpdate(id, medParams, {
    new: true,
  });
  return updatedMed;
}

// update a particular medication
router.put("/:id", auth, async (req, res, next) => {
  try {
    const updatedMed = await update(req.params.id, req.body);
    res.status(201).json({ success: true, data: updatedMed });
  } catch (err) {
    next(err);
  }
});

// adds a new medication for a specific user
router.post("/", auth, async (req, res, next) => {
  try {
    const newMed = await create(res.locals.user.sub, req.body);
    res.status(201).json({ success: true, data: newMed });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    remove(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

// gets all medication for all users
router.get("/", auth, async (req, res, next) => {
  try {
    const allMeds = await getAll();
    res.status(200).json({ success: true, data: allMeds });
  } catch (err) {
    next(err);
  }
});

// gets all medication for a particular user
router.get("/:id", auth, async (req, res, next) => {
  try {
    const userMeds = await getUserMeds(req.params.id);
    res.status(200).json({ success: true, data: userMeds });
  } catch (err) {
    next(err);
  }
});

export default router;

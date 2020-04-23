import { Router } from "express";
import {
  getUserMeds,
  removeMed,
  updateMed,
  createMed,
} from "../../datastore/medication";

const router = Router();

// gets all medication for a particular user
router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const userMeds = await getUserMeds(userId);
    res.status(200).json({ success: true, data: userMeds });
  } catch (err) {
    next(err);
  }
});

// creates new medication for a particular user
router.post("/", async (req, res, next) => {
  try {
    const newMed = await createMed(res.locals.user.sub._id, req.body);
    res.status(201).json({ success: true, data: newMed });
  } catch (err) {
    next(err);
  }
});

// update a particular medication
router.put("/:id", async (req, res, next) => {
  try {
    const updatedMed = await updateMed(req.params.id, req.body);
    res.status(201).json({ success: true, data: updatedMed });
  } catch (err) {
    next(err);
  }
});

// deletes a medication by medication id
router.delete("/:id", async (req, res, next) => {
  try {
    removeMed(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
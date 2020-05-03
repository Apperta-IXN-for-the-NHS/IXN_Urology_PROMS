import { Router } from "express";
import {
  getAllResults,
  getAllUserResults,
} from "../../datastore/results";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await getAllResults();
    res.status(200).json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userResults = await getAllUserResults(userId);
    res.status(200).json({ success: true, data: userResults });
  } catch (err) {
    next(err);
  }
});

export default router;

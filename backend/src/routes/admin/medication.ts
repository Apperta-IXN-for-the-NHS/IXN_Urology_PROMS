import e, { Router, query } from "express";
import {
  getAllMeds,
  getMedbyId,
  getUserMeds,
  removeMed,
  updateMed,
  createMed,
} from "../../datastore/medication";

const router = Router();

// gets all medication for all users
// can filter for particular user
router.get("/", async (req, res, next) => {
  try {
    const emptyQuery = Object.keys(req.query).length === 0;
    let response;
    if (!emptyQuery) {
      response = await getUserMeds(req.query.userid as string);
    } else {
      response = await getAllMeds();
    }
    res.status(200).json({ success: true, data: response });
  } catch (err) {
    next(err);
  }
});

export default router;

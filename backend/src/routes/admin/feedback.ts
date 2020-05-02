import { Router } from "express";
import { getAllFeedback, getFeedbackById } from "../../datastore/feedback";

const router = Router();

// gets all feedback from all users
router.get("/", async (req, res, next) => {
  try {
    const allFeedback = await getAllFeedback();
    res.status(200).json({ success: true, data: allFeedback });
  } catch (err) {
    next(err);
  }
});

// gets feedback from a particular user via the user id
router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userFeedback = await getFeedbackById(userId);
    res.status(200).json({ success: true, data: userFeedback });
  } catch (err) {
    next(err);
  }
});

export default router;

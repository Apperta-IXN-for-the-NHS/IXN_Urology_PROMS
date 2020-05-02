import { Router } from "express";
import { submitFeedbackById } from "../../datastore/feedback";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const newFeedback = await submitFeedbackById(userId, req.body);
    res.status(201).json({ success: true, data: newFeedback });
  } catch (err) {
    next(err);
  }
});

export default router;

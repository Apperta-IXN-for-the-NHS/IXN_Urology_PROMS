import { Router } from "express";
import {
  getQuestbyUserId,
  createQuestResponse,
} from "../../datastore/questionnaire";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const userQuestResults = await getQuestbyUserId(userId);
    res.status(200).json({ success: true, data: userQuestResults });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const newQuestResult = await createQuestResponse(userId, req.body);
    res.status(201).json({ success: true, data: newQuestResult });
  } catch (err) {
    next(err);
  }
});

export default router;
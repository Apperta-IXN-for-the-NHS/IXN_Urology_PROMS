import { Router } from "express";
import {
  getUserResultsByKind,
  submitUserResultsByKind,
} from "../../datastore/results";
const router = Router();

router.get("/:resultKind", async (req, res, next) => {
  type selection = "PSA" | "IPSS" | "IIEF";
  console.log(req.params.resultKind);
  try {
    const userId = res.locals.user.sub._id;
    const results = await getUserResultsByKind(
      userId,
      req.params.resultKind as selection
    );
    res.status(200).json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
});

router.post("/:resultKind", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const response = await submitUserResultsByKind(userId, req.body);
    res.status(201).json({ success: true, data: response });
  } catch (err) {
    next(err);
  }
});

export default router;

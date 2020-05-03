import { Router } from "express";
import userRouter from "./user";
import medicationRouter from "./medication";
import feedbackRouter from "./feedback";
import resultsRouter from "./results";

const router = Router();
router.use("/users", userRouter);
router.use("/medications", medicationRouter);
router.use("/feedback", feedbackRouter);
router.use("/results", resultsRouter);

export default router;

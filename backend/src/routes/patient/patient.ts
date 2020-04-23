import { Router } from "express";
import userRouter  from "./user";
import medicationRouter from "./medication";
import questRouter from "./questionnaire";

const router = Router();

router.use("/users", userRouter);
router.use("/medications", medicationRouter);
router.use("/questionnaires", questRouter);
// router.use("/results", resultsRouter)''

export default router;
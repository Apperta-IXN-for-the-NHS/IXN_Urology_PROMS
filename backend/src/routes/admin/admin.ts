import { Router } from "express";
import userRouter from "./user";
import medicationRouter from "./medication";


const router = Router();
router.use("/users", userRouter);
router.use("/medications", medicationRouter);



export default router;
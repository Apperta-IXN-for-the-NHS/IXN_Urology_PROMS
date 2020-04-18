import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hit users endpoint");
});

router.get("/id", (req, res) => {
  res.send("Hit users/id endpoint");
});

export default router;

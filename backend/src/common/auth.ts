import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";
config();

export default function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No authorisation token" });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET!);
    res.locals.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ success: false, message: "Invalid token" });
  }
}

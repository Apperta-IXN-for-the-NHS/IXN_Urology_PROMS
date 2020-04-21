import { NextFunction, Response, Request } from "express";

export default function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  console.log(err)
  return res.status(400).json({ success: false, message: err });
}

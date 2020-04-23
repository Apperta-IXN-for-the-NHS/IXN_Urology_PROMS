import { Router } from "express";
import { updateUser, getUserById } from "../../datastore/user";

const router = Router();

// get user info for the user who is calling this endpoint
router.get("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const user = await getUserById(userId);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

// update user info for the user who is calling this endpoint
router.put("/", async (req, res, next) => {
  try {
    const userId = res.locals.user.sub._id;
    const updatedUser = await updateUser(req.body, userId);
    res.status(202).json({ success: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
});

export default router;

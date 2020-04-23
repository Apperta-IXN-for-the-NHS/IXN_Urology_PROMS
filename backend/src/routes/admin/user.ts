import { Router } from "express";
import { updateUser, getUserById, getAllUsers } from "../../datastore/user";

const router = Router();

// get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ succes: true, data: users });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedUser = await updateUser(req.body, userId);
    res.status(202).json({ success: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
});

router.put;

export default router;

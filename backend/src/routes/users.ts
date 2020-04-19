import { Router } from "express";
import userModel from "../models/users";

const router = Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.json({ success: "true", data: allUsers });
  } catch (err) {
    res.json({ success: "false", message: err });
  }
});

// get single user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json({ success: "true", data: user });
  } catch (err) {
    res.json({ success: "false", message: err });
  }
});

// update details of existing user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await userModel
      .findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true} // return the updated document
      )
    res.json({ success: "true", data: updatedUser });
  } catch (err) {
    res.json({ success: "false", message: err });
  }
});

// create new user and add to db
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const user = new userModel(req.body);
    const savedUser = await user.save();
    res.json({ success: "true", data: savedUser });
  } catch (err) {
    res.json({ success: "false", message: err });
  }
});

export default router;

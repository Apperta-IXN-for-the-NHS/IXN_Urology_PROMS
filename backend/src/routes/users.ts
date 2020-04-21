import { Router } from "express";
import userModel from "../models/users";
import IUser from "../models/interfaces/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import auth from "../common/auth";
config();

const router = Router();

async function getAll() {
  return await userModel.find().select("-password");
}

export async function getById(id: string) {
  return await userModel.findById(id).select("-password");
}

async function register(userParams: IUser) {
  const userExists = await userModel.findOne({ email: userParams.email });
  if (userExists) {
    throw "This email address is already registered";
  }
  userParams.password = bcrypt.hashSync(userParams.password, 10);
  const newUser = new userModel(userParams);
  return await newUser.save();
}

async function update(userParams: IUser, id: string) {
  const user = await getById(id);
  if (!user) throw "User not found";
  // user is changing password
  if (userParams.password) {
    const newHash = bcrypt.hashSync(userParams.password, 10);
    userParams.password = newHash;
  }
  const updatedUser = await userModel.findByIdAndUpdate(id, userParams, {
    new: true,
  });
  return updatedUser;
}

async function authenticate(userParams: IUser) {
  const user = await userModel.findOne({ email: userParams.email });
  if (!user) {
    throw "No user with this email exists";
  }
  if (bcrypt.compareSync(userParams.password, user.password)) {
    const {password, ...userWithoutPass} = user.toObject();
    const token = jwt.sign({sub: user.id}, process.env.SECRET!)
    return {...userWithoutPass, token};
  } else {
    throw "incorrect password";
  }
}

router.post("/login", async (req, res, next) => {
  try {
    const authMessage = await authenticate(req.body);
    res.status(202).json({ succes: true, data: authMessage });
  } catch (err) {
    next(err);
  }
});

// get all users
router.get("/", auth, async (req, res, next) => {
  try {
    const users = await getAll();
    res.status(200).json({ succes: true, data: users, caller: res.locals.user});
  } catch (err) {
    next(err);
  }
});

// get single user by id
router.get("/:id", auth, async (req, res, next) => {
  try {
    const user = await getById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

// update details of existing user
router.put("/:id", auth, async (req, res, next) => {
  try {
    const updatedUser = await update(req.body, req.params.id);
    res.status(202).json({ success: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
});

// create new user and add to db
router.post("/", async (req, res, next) => {
  try {
    const newUser = await register(req.body);
    res.status(201).json({ succes: true, data: newUser });
  } catch (err) {
    next(err);
  }
});

export default router;

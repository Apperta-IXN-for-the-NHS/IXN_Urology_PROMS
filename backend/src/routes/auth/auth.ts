import { Router } from "express";
import userModel from "../../models/users";
import IUser from "../../models/interfaces/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

async function register(userParams: IUser) {
  const userExists = await userModel.findOne({ email: userParams.email });
  if (userExists) {
    throw "This email address is already registered";
  }
  userParams.password = bcrypt.hashSync(userParams.password, 10);
  const newUser = new userModel(userParams);
  return await newUser.save();
}

async function login(userParams: IUser) {
  const user = await userModel.findOne({ email: userParams.email });
  if (!user) {
    throw "No user with this email exists";
  }
  if (bcrypt.compareSync(userParams.password, user.password)) {
    const { password, ...userWithoutPass } = user.toObject();
    const token = jwt.sign({ sub: userWithoutPass }, process.env.SECRET!);
    return { ...userWithoutPass, token };
  } else {
    throw "incorrect password";
  }
}

const router = Router();

// create a new user and save to User collection
router.post("/register", async (req, res, next) => {
  try {
    const newUser = await register(req.body);
    res.status(201).json({ succes: true, data: newUser });
  } catch (err) {
    next(err);
  }
});

// login an existing user
router.post("/login", async (req, res, next) => {
  try {
    const authMessage = await login(req.body);
    res.status(202).json({ succes: true, data: authMessage });
  } catch (err) {
    next(err);
  }
});

export default router;
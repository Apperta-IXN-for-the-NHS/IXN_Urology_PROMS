import express from "express";
import userRoute from "./routes/users";
import { config } from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import handleError from "./common/errorHandler";
import userModel from "./models/users";

config();

const app = express();

app.use(bodyParser.json());

app.use("/users", userRoute);

app.use(handleError);

mongoose
  .connect(process.env.DB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Started server on port 5000"));
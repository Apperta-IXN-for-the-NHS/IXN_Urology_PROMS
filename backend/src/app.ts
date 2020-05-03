import express from "express";
import apiRoute from "./routes/patient/patient";
import adminRoute from "./routes/admin/admin";
import authRoute from "./routes/auth/auth";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import handleError from "./common/errorHandler";
import isAuthenticated, { isAdmin } from "./common/auth";

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRoute);
app.use("/api", isAuthenticated, apiRoute);
app.use("/admin", isAuthenticated, isAdmin, adminRoute);
app.use(handleError);

mongoose
  .connect(process.env.DB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log("Started server on port 5000"));

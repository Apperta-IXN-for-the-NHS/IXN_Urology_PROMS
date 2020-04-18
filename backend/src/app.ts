import express from "express";
import userRoute from "./routes/users";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/users', userRoute)

app.listen(5000, () => console.log("Started server on port 5000"));
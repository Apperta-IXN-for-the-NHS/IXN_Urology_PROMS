import express from "express";
// import mongoose from "mongoose";

const app: express.Application = express();


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  res.send("We are on the posts page");
});

app.listen(5000, () => console.log("Started server on port 5000"));

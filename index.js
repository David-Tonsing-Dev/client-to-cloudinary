import "dotenv/config";

import express from "express";
import cors from "cors";

import imageRoute from "./route/imageRoute.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/image", imageRoute);

app.get("/", (req, res) => {
  res.json("Today is the day!");
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});

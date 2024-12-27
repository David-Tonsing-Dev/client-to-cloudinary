import express from "express";
import { uploadImage } from "../controller/imageController.js";
import upload from "../middleware/multer.js";

const router = express.Router();
router.post("/upload", upload.single("image"), uploadImage);

export default router;

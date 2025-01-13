import uploadController from "../controllers/uploadController.mjs";
import express from "express";

const router = express.Router();

router.route("/upload").get(uploadController.uploadImage);

export default router;

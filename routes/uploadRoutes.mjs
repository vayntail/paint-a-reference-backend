import uploadController from "../controllers/uploadController.mjs";
import express from "express";

const router = express.Router();

router.route("/").post(uploadController.uploadImage);

export default router;

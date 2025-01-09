import express from "express";
import refController from "../controllers/refController.mjs";
const router = express.Router();

router.route("/").get(refController.getRefs);

export default router;

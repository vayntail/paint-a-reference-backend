import express from "express";
import studyController from "../controllers/studyController.mjs";
const router = express.Router();

router.route("/").get(studyController.getStudies);

export default router;

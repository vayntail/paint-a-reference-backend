import express from "express";
import studyController from "../controllers/studyController.mjs";
const router = express.Router();

router.get("/", studyController.getStudies);
router.post("/", studyController.createStudy);
router.get("/:id", studyController.getStudyById);
router.put("/:id", studyController.updateStudyById);
router.delete("/:id", studyController.deleteStudyById);
router.post("/:id/fav", studyController.toggleFavStudyById);
export default router;

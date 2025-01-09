import express from "express";
import commentController from "../controllers/commentController.mjs";
const router = express.Router();

router.route("/").get(commentController.getComments);

export default router;

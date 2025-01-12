import express from "express";
import refController from "../controllers/refController.mjs";
const router = express.Router();

router.get("/", refController.getRefs);
router.post("/", refController.createRef);
router.get("/:id", refController.getRefById);
router.put("/:id", refController.updateRefById);
router.delete("/:id", refController.deleteRefById);
router.post("/:id/fav", refController.toggleFavRefById);

export default router;

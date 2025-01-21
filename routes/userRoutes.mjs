import express from "express";
import userController from "../controllers/userController.mjs";
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.get("/login", userController.login);
router.delete("/:id", userController.deleteUserById);
router.post("/:id/moderator", userController.setUserToModerator);

export default router;

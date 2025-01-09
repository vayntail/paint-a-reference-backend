import express from "express";
import userController from "../controllers/userController.mjs";
const router = express.Router();

router.route("/").get(userController.getUsers);

export default router;

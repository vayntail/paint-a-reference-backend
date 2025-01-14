import express from "express";
import dotenv from "dotenv";
dotenv.config();
import refRoutes from "./routes/refRoutes.mjs";
import commentRoutes from "./routes/commentRoutes.mjs";
import studyRoutes from "./routes/studyRoutes.mjs";
import uploadRoutes from "./routes/uploadRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import db from "./db/conn.mjs";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello!");
});

app.use("/api/refs", refRoutes);
app.use("/api/users", userRoutes);
app.use("/api/studies", studyRoutes);
app.use("/api/comments", commentRoutes);
app.use("/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log(`server is ready on port: https://localhost:${PORT}`);
});

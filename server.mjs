import express from "express";
import dotenv from "dotenv";
dotenv.config();
import refRoutes from "./routes/refRoutes.mjs";
import commentRoutes from "./routes/commentRoutes.mjs";
import studyRoutes from "./routes/studyRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import db from "./db/conn.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.use("/api/refs", refRoutes);
app.use("/api/users", userRoutes);
app.use("/api/studies", studyRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`server is ready on port: https://localhost:${PORT}`);
});

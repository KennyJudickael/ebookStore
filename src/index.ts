import { log } from "console";
import express from "express";
import authRouter from "./routes/auth";

const app = express();

app.use("/auth", authRouter);

const port = process.env.PORT || 8989;

app.post("/auth/generate-link", (req, res) => {});

app.listen(port, () => {
  log(`Server is running on port http://localhost:${port}`);
});

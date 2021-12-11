import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes";
import "reflect-metadata";

const app = express();
createConnection();

//Middlewares
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/users", userRoutes);

app.listen(8000, () => {
  console.log("Server running port 8000");
});

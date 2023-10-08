import express from "express";
import morgan from "morgan";

import { booksRoutes } from "./routes/booksRoutes.js";
import { authorsRoutes } from "./routes/authorsRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

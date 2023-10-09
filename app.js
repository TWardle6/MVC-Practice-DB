import express from "express";
import morgan from "morgan";

import { resurreccionRoutes } from "./routes/resurreccionRoutes.js";
import { espadaRoutes } from "./routes/espadaRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/resurreccion", resurreccionRoutes);
app.use("/espada", espadaRoutes);

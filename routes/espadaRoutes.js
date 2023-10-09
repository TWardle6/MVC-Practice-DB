import express from "express";

import * as espadaController from "../controllers/espadaController.js";

export const espadaRoutes = express.Router();

espadaRoutes.get("/", espadaController.getEspada);

espadaRoutes.get("/:id", espadaController.getEspadaById);

espadaRoutes.post("/", espadaController.createEspada);

espadaRoutes.patch("/:id", espadaController.updateEspadaById);

espadaRoutes.delete("/:id", espadaController.deleteEspadaById);

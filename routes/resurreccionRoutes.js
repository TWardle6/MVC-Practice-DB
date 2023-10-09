import express from "express";

import * as resurreccionController from "../controllers/resurreccionController.js";

export const resurreccionRoutes = express.Router();

resurreccionRoutes.get("/", resurreccionController.getResurreccions);

resurreccionRoutes.get("/:id", resurreccionController.getResurreccionById);

resurreccionRoutes.post("/", resurreccionController.createResurreccion);

resurreccionRoutes.patch("/:id", resurreccionController.updateResurreccionById);

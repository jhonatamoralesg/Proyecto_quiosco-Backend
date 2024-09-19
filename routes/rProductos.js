import { Router } from "express";

import { controllerProducto } from "../controllers/controllerProductos.js";

export const routesProductos = Router();

routesProductos.get("/productos", controllerProducto.getAll);           //  











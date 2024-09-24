import { Router } from "express";

import { controllerVenta } from "../controllers/controllerVentas";


export const routesVentas =Router();
routesVentas.post("/realizarventa", controllerVenta.createVenta);
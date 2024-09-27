import { Router } from "express";

import { controllerVenta } from "../controllers/controllerVentas";


export const routesVentas =Router();


routesVentas.get("/mostrarventas", controllerVenta.mostrarventa);
routesVentas.post("/realizarventa", controllerVenta.createVenta);
routesVentas.post("/mostrar_cliente_venta", controllerVenta.mostrarventaid);

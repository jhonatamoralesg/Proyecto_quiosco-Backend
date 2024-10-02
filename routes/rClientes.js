import { Router } from "express";


import { controllerClientes } from "../controllers/controllerClientes.js";

export const routesClientes= Router();

routesClientes.get("/clientes", controllerClientes.getAll);


import express from "express";
import morgan from "morgan";  // Morgan sirve para ver las solicitudes que se hacen hacia el servidor
import { routesProductos } from "./routes/rProductos.js";
import path from "path";
import cors from "cors";
const __dirname = process.cwd();

const app = express();
const port = 4000; // Puerto 4000

// Habilitar CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500' // Solo permite solicitudes desde este dominio
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Configuración de vistas
app.set("views", path.join(__dirname, "views"));

// Definir rutas (después de configurar CORS)
app.use(routesProductos);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

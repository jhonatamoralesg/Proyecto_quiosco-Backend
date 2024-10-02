import express from "express";
import morgan from "morgan";  // Morgan sirve para ver las solicitudes que se hacen hacia el servidor
import { routesProductos } from "./routes/rProductos.js";
import path from "path";
import cors from "cors";
import dotenv from 'dotenv'; // Importar dotenv
import { routesClientes } from "./routes/rClientes.js";


dotenv.config(); // Aquí invocas dotenv para cargar las variables desde .env

const __dirname = process.cwd();

const app = express();
const port = 4000; // Puerto 4000
const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:5501'], // Múltiples orígenes permitidos
  methods: ['GET', 'POST'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
};
// Habilitar CORS
app.use(cors(corsOptions));


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


// Configuración de vistas
app.set("views", path.join(__dirname, "views"));

// Definir rutas (después de configurar CORS)
app.use(routesProductos);
app.use(routesClientes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

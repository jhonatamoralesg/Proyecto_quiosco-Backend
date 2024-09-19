// database.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Configurar las variables de entorno (si usas un archivo .env)
dotenv.config();

// Crear el pool de conexiones
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "quioscoescolar",
  port: "3307",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
//const getConnection = async () => await pool.getConnection();


// Exportar el pool para usarlo en otros archivos


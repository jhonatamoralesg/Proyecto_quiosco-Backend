// testConnection.js
import database from "database.js"; // Importar el pool desde database.js

// Función para probar la conexión
async function testConnection() {
  try {
    // Realizar una consulta para verificar la conexión
    const connection = await pool.getConnection();
    console.log('Conexión exitosa a la base de datos.'); // Debería mostrar 2
    connection.release(); // libera la conexion  para que pueda ser usada por otras partes

  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
  }
}
z
// Ejecutar la prueba de conexión
testConnection();

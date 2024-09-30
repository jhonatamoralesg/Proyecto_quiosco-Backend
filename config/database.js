import pkg from 'pg'; // Importa el paquete completo como pkg
const { Pool } = pkg; // Desestructura el objeto para obtener Pool

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'coper123',
  database: 'quioscoescolar',
  port: 5432,
});
// Función para probar la conexión
async function testConnection() {
  try {
    // Conectar al pool
    const client = await pool.connect();

    // Hacer una consulta simple (puede ser cualquier tabla existente)
    const res = await client.query('SELECT NOW()'); // Consulta de ejemplo
    console.log('Conexión exitosa:', res.rows[0]);

    // Liberar el cliente
    client.release();
  } catch (err) {
    console.error('Error en la conexión', err);
  }
}

// Llamar a la función para probar la conexión
testConnection();

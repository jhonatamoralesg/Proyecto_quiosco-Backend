import { pool } from "../config/database.js"; // Asegúrate de que la ruta es correcta

export const mProductos = {
  getAll: async () => {
    try {
      const [results] = await pool.query("SELECT * FROM productos");
      return results;
    } catch (error) {
      console.log("Error al cargar los productos", error);
      throw new Error("Error al cargar los productos");
    }
  }
};

/*
async function testTasks() {
    try {
      // Prueba de obtener todas las tareas
      console.log('Obteniendo todos los productos...');
      const tasks = await mProductos.getAll();
      console.log('Tareas obtenidas:', tasks);
    }
  catch (error) {
    console.error('Error en la prueba de tareas:', error);
  }
  };

  
  testTasks();
*/



import { pool } from "../config/database.js"; // Asegúrate de que la ruta es correcta



export const mClientes =  {

getAll: async ()=>  {
const clientes = await pool.connect();
try {
    

const results= await clientes.query("SELECT * FROM clientes");
return results.rows;
} catch (error) {
    console.log("Error al mostrar los clientes");
    throw new Error(error);
    
}


}



}
import { mProductos } from "../models/modelProductos.js"; // Asegúrate de incluir la extensión .js
export const controllerProducto = {
  getAll: async (req, res) => {
    try {
      let productos = await mProductos.getAll();
      console.log(productos);
      
      // Enviar los productos como JSON
      res.status(200).json({
        success: true,
        data: productos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al mostrar los productos",
        error: error.message,
      });
    }
  }
};

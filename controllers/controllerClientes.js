import { mClientes } from "../models/modelCliente.js";
export const controllerClientes ={
getAll: async(req, res) =>  {
try {
    let clientes= await mClientes.getAll();
    console.log(clientes);
    // enviar los clientes como un json:
    res.status(200).json({
      success: true,
      data: clientes,


    })
} catch (error) {
      res.status({
    success: false,
    message: "Error al mostrar los clientes",
    error: error.message,


      });
}


}


}






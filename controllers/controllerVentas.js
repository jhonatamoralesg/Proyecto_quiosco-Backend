import { mVentas } from "../models/modelVentas";
import { getConnectionTransaction } from "../config/database";

export const controllerVenta = {
    createVenta: async (req, res) => {
        const { idcliente, productos } = req.body; // `productos` es un array con `producto_id`, `cantidad`, y `precio_unitario`
        let connection;

        try {
            // Iniciar la transacción
            connection = await getConnectionTransaction();
            const idventa = await mVentas.createVenta(idcliente, connection);
            
            let totalVenta = 0;

            // Recorrer el arreglo de productos
            for (let producto of productos) {
                const { idproducto, cantidad, precio } = producto;
                const subtotal = cantidad * precio;
                totalVenta += subtotal;

                // Crear los detalles de la venta
                await mVentas.agregarDetalle(idventa, idproducto, cantidad, precio, connection);
            }

            // Actualizar el total de la venta
            await mVentas.actualizarTotal(idventa, totalVenta, connection);

            // Confirmar la transacción
            await connection.commit();

            // Enviar respuesta
            res.status(201).json({
                message: "Venta realizada con éxito",
                ventaId: idventa,
                total: totalVenta
            });
        } catch (error) {
            if (connection) {
                // Revertir la transacción en caso de error
                await connection.rollback();
            }

            // Registrar el error en la terminal
            console.error("Error en la transacción de la venta:", error);

            // Enviar respuesta de error
            res.status(500).json({
                message: "Error al realizar la venta",
                error: error.message
            });
        } finally {
            if (connection) connection.release(); // Liberar la conexión
        }
    }
};

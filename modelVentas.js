import { mVentas } from "../models/modelVentas.js"; // Asegúrate de la ruta correcta

export const controllerVenta = {
    createVenta: async (req, res) => {
        const { idcliente, productos } = req.body; // Asegúrate de que `productos` esté en el formato correcto
        const connection = await getConnectionTransaction(); // Obtener la conexión para la transacción
        try {
            const idventa = await mVentas.createVenta(idcliente, connection); // Crear venta
            let totalVenta = 0;

            // Recorrer el arreglo de productos
            for (let producto of productos) {
                const { idproducto, cantidad, precio } = producto;
                const subtotal = cantidad * precio;
                totalVenta += subtotal;

                // Agregar detalle de venta
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
            await connection.rollback(); // Revertir en caso de error
            console.error("Error en la transacción de la venta:", error);
            res.status(500).json({
                message: "Error al realizar la venta",
                error: error.message
            });
        } finally {
            connection.release(); // Liberar la conexión
        }
    }
};

import { DataTypes, Sequelize } from "sequelize";
import  {testConnection}  from "../config/dbSequelize.js";
import {sequelize } from  "../config/dbSequelize.js";
import { probar } from "../config/aea.js";

const Ventas = sequelize.define('ventas', {
    idventa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idcliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}, {

    // otra manera de definir
    //freezeTableName: true,  // esto sirve cuando el modelo tiene el mismo nombre de la tabla.
    tableName: 'ventas' // o tambien lo podemos definir manualmente.
});

console.log(Ventas === sequelize.models.ventas); // Verifica que el modelo se ha definido correctamente

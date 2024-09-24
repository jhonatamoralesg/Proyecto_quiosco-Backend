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
    }
});

console.log(Ventas === sequelize.models.ventas); // Verifica que el modelo se ha definido correctamente

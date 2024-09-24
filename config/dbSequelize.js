import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'; // Importar dotenv


dotenv.config(); 
dotenv.config({ path: '../.env' }); // Ruta relativa desde el archivo en la carpeta 'config'


/*
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);
*/
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number(process.env.DB_PORT), 
    logging: false, 
});



export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.log("Error en la conexión con la base de datos", error);
    }
};



testConnection();







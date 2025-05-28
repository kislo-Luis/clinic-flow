import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config";
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize({
    dialect: DB_CONFIG.dialect,
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
    logging: false,
    pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 10,
    min: parseInt(process.env.DB_POOL_MIN) || 0,
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
    idle: parseInt(process.env.DB_POOL_IDLE) || 10000
  }    
});

//proximamente iportamos los modelos y los pasamos al array
// const models = [];
// models.forEach((model) => model.initialize(sequelize))

export {sequelize};
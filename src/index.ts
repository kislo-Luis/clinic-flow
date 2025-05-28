import express from 'express';
import { sequelize } from './lib/Shared/Infrastructure/config/sequelize';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    process.exit(1); // corta el servidor si no se conecta
  }

  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

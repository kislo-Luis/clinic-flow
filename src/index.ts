import express from 'express';
import { sequelize } from './lib/Shared/Infrastructure/config/sequelize';
import {Request, Response, NextFunction} from 'express'
import dotenv from "dotenv";
import { GlobalAppException } from './lib/Shared/Infrastructure/config/middleware/GlobalAppException';
import errorMessages from './messages';
import { expressPersonRouter } from './lib/Person/infrastructure/ExpressPersonRouter';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.use(express.json());
app.use(expressPersonRouter)

app.use((err:any, req: Request, res:Response, next: NextFunction)=> {
  if (err instanceof GlobalAppException) {
    res.status(err.status).json({
      code: err.code,
      message: err.message,
      detail: err.details
    })
  } else {
    res.status(500).json({
      code: '999',
      message: errorMessages['5000'] || 'error desconocido'
      })
  }
})
sequelize
.sync({force:false, alter:true})
.then(() => {
 console.log('📦 Base de datos sincronizada con éxito');

app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  });
})

.catch((error)=> {
  console.error('Error al sincronizar la base de datos:', error);
})




import { Router } from "express";
import { ExpressPersonController } from "./ExpressPersonController";

const controller= new ExpressPersonController();
export const expressPersonRouter=Router();

expressPersonRouter.post('/person/create',controller.create)
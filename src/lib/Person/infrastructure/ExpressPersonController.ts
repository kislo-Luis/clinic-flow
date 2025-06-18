import { serviceContainer } from "../../Shared/ServiceContainer";
import { CreatePersonRequestDto } from "../application/dto/request/CreatePersonRequestDTO";
import {Request, Response, NextFunction} from "express"
import {plainToInstance} from "class-transformer"

export class ExpressPersonController{
    async create (req:Request, res:Response, next:NextFunction): Promise<void>{
        try {
            const dto = plainToInstance(CreatePersonRequestDto, req.body)            
            await serviceContainer.person.personCreate.run(dto)
             res.status(201).json({message:"La persona fue creada correctamente"})
        } catch (error) {
            next(error)
        }
    }

    async getAllPersons (req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const size = parseInt(req.query.size as string) || 10;

      const persons = await serviceContainer.person.getAll.run(page, size);
      return res.status(200).json(persons);

    } catch (error) {
      next(error);
    }
  }
}
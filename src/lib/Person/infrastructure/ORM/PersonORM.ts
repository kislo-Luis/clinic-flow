
import { CreatePersonRequestDto } from "../../application/dto/request/CreatePersonRequestDTO";
import { Person } from "../../domain/Person";
import { PersonRepository } from "../../domain/PersonRepository";
import { PersonModel } from "./PersonModel";

export class PersonORMRepository implements PersonRepository {

 
  async getOnePerson(fullName: string, lastName: string, dni: string): Promise<Person | null> {
    const person= await PersonModel.findOne({
      where:{
        fullName,
        lastName,
        dni
      },
    });
    return person? this.mapToDomain(person):null;
  }

  async getOneByDni(dni:string): Promise<Person|null>{
    const person= await PersonModel.findOne({
      where:{        
        dni
      },
    });
    return person? this.mapToDomain(person):null;
  }

  async create(dto: CreatePersonRequestDto): Promise<Person> {  
      const personDomain = new Person({
      fullName: dto.fullName,
      lastName: dto.lastName,
      dni: dto.dni,
      yearBirth: dto.yearBirth,
      phone: dto.phone,
      address: dto.address,
    });

    const personPrimitive = personDomain.mapToPrimitives();

    const createdPerson = await PersonModel.create(personPrimitive);

    return this.mapToDomain(createdPerson);
  }
  private mapToDomain(personModel: PersonModel): Person {
    return new Person({
      id: personModel.id,
      fullName: personModel.fullName,
      lastName: personModel.lastName,
      dni: personModel.dni,
      yearBirth: personModel.yearBirth,
      phone: personModel.phone,
      address: personModel.address,
      updatedBy: personModel.updatedBy,
      updatedAt: personModel.updatedAt,
      active: personModel.active,
    });
  }
}


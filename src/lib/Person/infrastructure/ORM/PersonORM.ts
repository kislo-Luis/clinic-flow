
import { CreatePersonRequestDto } from "../../application/dto/request/CreatePersonRequestDTO";
import { Person } from "../../domain/Person";
import { PersonRepository } from "../../domain/PersonRepository";
import { PersonModel } from "./PersonModel";

export class PersonORMRepository implements PersonRepository {

 
  async getOnePerson(firstName: string, lastName: string, dni: string): Promise<Person | null> {
    const person= await PersonModel.findOne({
      where:{
        firstName,
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
  
    async getActivePerson(page: number, size: number): Promise<Person[]> {
    const offset = (page - 1) * size;
    const persons = await PersonModel.findAll({
      where: { active: true },
      limit: size,
      offset: offset,
      order: [["createdAt", "DESC"]],
      raw: true,
    });

    return persons.map((person) => this.mapToDomain(person));
  }

  

  async create(dto: CreatePersonRequestDto): Promise<Person> {  
      const personDomain = new Person({
      firstName: dto.firstName,
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
      firstName: personModel.firstName,
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


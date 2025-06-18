import { PersonORMRepository } from "../Person/infrastructure/ORM/PersonORM"
import { PersonCreate } from "../Person/application/CreatePerson/CreatePerson"
import { GetAllPersons } from "../Person/application/GetAllPersons/GetAllPersons"

const personRepository = new PersonORMRepository();


export const serviceContainer ={
    person:{
        personCreate: new PersonCreate(personRepository),
        getAll: new GetAllPersons(personRepository)
    }
}
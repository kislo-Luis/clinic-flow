import { PersonORMRepository } from "../Person/infrastructure/ORM/PersonORM"
import { PersonCreate } from "../Person/application/CreatePerson/CreatePerson"

const personRepository = new PersonORMRepository();


export const serviceContainer ={
    person:{
        personCreate: new PersonCreate(personRepository)
    }
}
import {CreatePersonRequestDto} from "../application/dto/request/CreatePersonRequestDTO"
import {Person} from "../domain/Person"

export interface PersonRepository {

    getOnePerson(fullName:string,lastName:string, dni:string): Promise<Person|null>
    getOneByDni(dni:string): Promise<Person|null>
    create(dto:CreatePersonRequestDto):Promise<Person>;
}
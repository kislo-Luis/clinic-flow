import {Person} from "../../../domain/Person"
export class PersonGeneralResponseDTO {
  exists: boolean;
  id?: number;
  firstName?: string;
  lastName?: string;
  dni?: string; 
  
    constructor(person: Person | null) {
      // Convierto el valor 'person' a booleano: true si existe, false si es null
      this.exists = !!person;
      if (person) {
        this.id = person.id;
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.dni = person.dni;
      }else{
        this.exists=false
      }
    }
  }
  
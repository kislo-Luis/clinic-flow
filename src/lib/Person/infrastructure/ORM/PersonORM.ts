
import { Person } from "../../domain/Person";
import { PersonRepository } from "../../domain/PersonRepository";
import { PersonModel } from "./PersonModel";

export class PersonORMRepository implements PersonRepository {
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


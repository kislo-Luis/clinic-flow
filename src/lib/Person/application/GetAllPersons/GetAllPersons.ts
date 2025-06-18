import { GlobalAppException } from "../../../Shared/Infrastructure/config/middleware/GlobalAppException";
import { PersonRepository } from "../../domain/PersonRepository";
import { PersonGeneralResponseDTO } from "../dto/response/PersonGeneralResponseDTO";
import { plainToInstance } from "class-transformer";
import errorMessages from "../../../../messages";

export class GetAllPersons {
  constructor(private repository: PersonRepository) {}

  async run(
    page: number,
    size: number
  ): Promise<PersonGeneralResponseDTO[]> {
    try {
      const persons = await this.repository.getActivePerson(page , size );
      if (!persons.length){
        throw new GlobalAppException(
          204,
          '2006',
          errorMessages['2006'],
          'No se encontraron personas activas'
        )
      }

      const personsDTO = persons.map((person) =>
        plainToInstance(PersonGeneralResponseDTO, {
          firstName: person.firstName,
          lastName: person.lastName,
          dni: person.dni,
          phone: person.phone,
          address: person.address,
        })
      );

      return personsDTO;
      
    } catch (error) {

      throw error instanceof GlobalAppException
        ? error
        : new GlobalAppException(
            500,
            "5000",
            errorMessages["5000"],
            "error inesperado al obtener las personas"
          );
    }
  }
}

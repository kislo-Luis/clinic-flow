import { PersonRepository } from "../../domain/PersonRepository";
import { CreatePersonRequestDto } from "../dto/request/CreatePersonRequestDTO";
import { Person } from "../../domain/Person";
import { validateOrReject, ValidationError } from "class-validator";
import { GlobalAppException } from "../../../Shared/Infrastructure/config/middleware/GlobalAppException";

export class PersonCreate {
  constructor(private repository: PersonRepository) {}

  async run(dto: CreatePersonRequestDto): Promise<Person> {
   
    

    if (typeof dto.fullName === "string") {
      dto.fullName = dto.fullName.toUpperCase();
    } else {
      throw new GlobalAppException(
        400,
        "4001",
        "El nombre debe ser un string",
        "Nombre debe ser texto."
      );
    }

    if (typeof dto.lastName === "string") {
      dto.lastName = dto.lastName.toUpperCase();
    } else {
      throw new GlobalAppException(
        400,
        "4001",
        "El apellido debe ser un string",
        "Apellido debe ser texto."
      );
    }

    await validateOrReject(dto).catch((errors) => {
      throw new GlobalAppException(
        400,
        "4000",
        "Errores de validación",
        this.formatErrors(errors)
      );
    });

    
    const person = await this.repository.getOneByDni(      
      dto.dni
    );

    if (!person) {
      const newPerson = await this.repository.create(dto);
      return newPerson;
    } else {
      throw new GlobalAppException(
        400,
        "4013",
        "La persona ya está registrada",
        "Intente nuevamente con otros datos, ya existe una personas"
      );
    }
  }

  private formatErrors(errors: ValidationError | ValidationError[]): string[] {
    if (!Array.isArray(errors)) {
      errors = [errors];
      console.error
    }
    return errors.flatMap((error) => Object.values(error.constraints || {}));
  }
}

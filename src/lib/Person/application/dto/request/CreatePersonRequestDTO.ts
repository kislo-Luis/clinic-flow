import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  IsDate
} from "class-validator";

export class CreatePersonRequestDto {
  @IsString({ message: "El nombre debe ser un string" })
  @IsNotEmpty({ message: "El campo nombre no puede estar vacío" })
  fullName: string;

  @IsString({ message: "El apellido debe ser un string" })
  @IsNotEmpty({ message: "El campo apellido no puede estar vacío" })
  lastName: string;

  
  @IsString({ message: "El DNI debe ser un string" })
  @IsNotEmpty({ message: "El campo DNI no puede estar vacío" })
  @Length(8, 11, { message: "El DNI debe tener entre 9 y 11 caracteres" })
  dni: string;


  @IsNotEmpty({ message: "La fecha  debe ser un string" })
  yearBirth: string;
  

  @IsOptional()
  phone:string;

 

  @IsNotEmpty({ message: "La dirección no puede estar vacía" })
  address: string;


  constructor(fullName: string, lastName: string, dni: string, yearBirth: string,phone: string) {
    this.fullName = fullName;
    this.lastName = lastName;
    this.dni = dni;
    this.yearBirth = yearBirth;
    this.phone= phone;
    
}
}

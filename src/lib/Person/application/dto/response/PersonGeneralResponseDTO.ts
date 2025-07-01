export class PersonGeneralResponseDTO{
     id: number;    
     firstName: string;
     lastName: string;
     dni: string;
     phone: string;
     address: string;    
    
     constructor (id:number, firstName: string,lastName: string,dni: string,phone: string, address: string, ){
        this.id=id,
        this.firstName=firstName,
        this.lastName=lastName,
        this.dni=dni,
        this.phone=phone,  
        this.address=address 
     }
      
}
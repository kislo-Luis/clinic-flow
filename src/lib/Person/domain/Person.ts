export class Person {
    public id?: number;
    public fullName?: string;
    public lastName?: string;
    public dni?: string;
    public yearBirth?: string;
    public phone?: string;
    public address?: string;
    public updatedBy?: number;
    public updatedAt?: Date;
    public active: boolean;

    constructor(init?: Partial<Person>) {
        Object.assign(this, init);
        this.updatedAt = this.updatedAt || new Date(); // Fecha predeterminada
        this.active = this.active !== undefined ? this.active : true; // Valor predeterminado
    }

    public mapToPrimitives() {
        return {
            id: this.id,
            fullName: this.fullName,
            lastName: this.lastName,
            dni: this.dni,
            yearBirth: this.yearBirth,
            phone: this.phone,
            address: this.address,
            updatedBy: this.updatedBy,
            updatedAt: this.updatedAt?.toISOString(),
            active: this.active
        };
    }
}

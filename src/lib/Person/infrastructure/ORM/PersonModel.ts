import {Model, Sequelize,DataTypes} from "sequelize";


export class PersonModel extends Model{
    public id!: number;     
    public fullName!: string;
    public lastName!: string;
    public dni!: string;
    public yearBirth!: string;
    public phone!: string
    public address!: string;    
    public updatedBy!: number;   
    public updatedAt!: Date;
    public active!: boolean;

    public static initialize(sequelize:Sequelize){
        PersonModel.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            fullName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            lastName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            dni:{
                type:DataTypes.STRING,
                allowNull:false,
                unique: true
            },
            yearBirth:{
                type:DataTypes.STRING,

            },
            phone:{
                type:DataTypes.STRING,
                allowNull:true
            },
            address:{
                type:DataTypes.STRING,
                allowNull:true
            },
            updatedBy:{
                type:DataTypes.INTEGER,
            },
            createdAt:{
                type:DataTypes.DATE
            },
            updatedAt:{
                type:DataTypes.DATE,
            },
            active:{
                type:DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            sequelize,
            modelName:'person',
            tableName:'persons',
            timestamps:true
        })
    }

}
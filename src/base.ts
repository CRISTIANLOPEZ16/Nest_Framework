import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Persona } from "./persona/entities/persona.entity";

export class Base {
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date
    
}
export interface ResponseInterface{
    status:number,
    object:any
}

export class User{
    @IsNotEmpty()
    @IsEmail()
    correo:string;

    @IsNotEmpty()
    @IsString()
    clave:string;
}
export class Pagination{
    @IsInt()
    take:number;
    
    @IsInt()
    skip:number;

    @IsOptional()
    query:string;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
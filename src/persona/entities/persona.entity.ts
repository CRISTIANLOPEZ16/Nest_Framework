import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { Base } from "src/base";
@Entity()
export class Persona extends Base{
    @PrimaryGeneratedColumn({name:"id_persona"})
    idPersona:number;

    @Column({type:"varchar",length:50})
    nombre:string;

    @Column({type:"varchar",length:50})
    apellido:string;

    @Column({type:"varchar",length:50})
    codigo:string;

    @Column({type:"varchar",length:50})
    correo:string;

    
    @Column({type:"varchar"})
    @Exclude()
    clave:string
}

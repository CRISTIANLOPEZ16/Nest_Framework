import { Actividad } from "src/actividad/entities/actividad.entity";
import { Base } from "src/base";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Maestro } from "src/maestro/entities/maestro.entity";
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Nota extends Base{
    @PrimaryGeneratedColumn({name:"id_nota"})
    idNota:number;

    @ManyToOne(()=>Actividad,actividad=>actividad.notas)
    actividad:Actividad;
    
    @ManyToOne((()=> Maestro))
    maestro:Maestro;

    @ManyToMany(()=>Estudiante)
    estudiante:Estudiante;
}

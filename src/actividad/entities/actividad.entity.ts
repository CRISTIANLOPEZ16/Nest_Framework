import { Base } from "src/base";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Maestro } from "src/maestro/entities/maestro.entity";
import { Nota } from "src/nota/entities/nota.entity";
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actividad  extends Base{
    @PrimaryGeneratedColumn({name:"id_actividad"})
    idActividad:number;

    @ManyToOne(()=>Estudiante,estudiante=>estudiante.actividades)
    estudiante:Estudiante;

    @ManyToOne(()=>Maestro,maestro=>maestro.actividades)
    maestro:Maestro;


    @OneToMany(()=>Nota,nota=>nota.actividad)
    notas:Nota[];
}

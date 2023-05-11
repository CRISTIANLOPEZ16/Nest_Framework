import { Actividad } from "src/actividad/entities/actividad.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, RelationId } from "typeorm";

@Entity()

export class Estudiante{

    @OneToOne(()=>Persona)
    @JoinColumn({name:"id_estudiante"})
    persona:Persona;

    @PrimaryColumn()
    @RelationId((estudiante:Estudiante)=>estudiante.persona)
    id_estudiante:number;


    @OneToMany(()=>Actividad,actividad=>actividad.estudiante)
    actividades:Actividad[];

}

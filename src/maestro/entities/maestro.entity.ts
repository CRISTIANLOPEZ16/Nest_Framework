import { Actividad } from "src/actividad/entities/actividad.entity";
import { Persona } from "src/persona/entities/persona.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, RelationId } from "typeorm";

@Entity()
export class Maestro {
    
    @OneToOne(()=>Persona)
    @JoinColumn({name:"id_maestro"})
    persona:Persona;

    
    @PrimaryColumn()
    @RelationId((maestro:Maestro)=>maestro.persona)
    id_maestro:number;

    @OneToMany(()=>Actividad,actividad=>actividad.estudiante)
    actividades:Actividad[];
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1683818446268 implements MigrationInterface {
    name = 'Migrations1683818446268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`persona\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_persona\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, \`apellido\` varchar(50) NOT NULL, \`codigo\` varchar(50) NOT NULL, \`correo\` varchar(50) NOT NULL, \`clave\` varchar(255) NOT NULL, PRIMARY KEY (\`id_persona\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maestro\` (\`id_maestro\` int NOT NULL, PRIMARY KEY (\`id_maestro\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nota\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_nota\` int NOT NULL AUTO_INCREMENT, \`actividadIdActividad\` int NULL, \`maestroIdMaestro\` int NULL, PRIMARY KEY (\`id_nota\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actividad\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_actividad\` int NOT NULL AUTO_INCREMENT, \`estudianteIdEstudiante\` int NULL, \`maestroIdMaestro\` int NULL, PRIMARY KEY (\`id_actividad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`estudiante\` (\`id_estudiante\` int NOT NULL, PRIMARY KEY (\`id_estudiante\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`maestro\` ADD CONSTRAINT \`FK_2079a2d2ad24cca486c61f537d8\` FOREIGN KEY (\`id_maestro\`) REFERENCES \`persona\`(\`id_persona\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`nota\` ADD CONSTRAINT \`FK_76b30fffe5bb59ed8d60eb9cd33\` FOREIGN KEY (\`actividadIdActividad\`) REFERENCES \`actividad\`(\`id_actividad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`nota\` ADD CONSTRAINT \`FK_e1b78311cf2141400cbe780a388\` FOREIGN KEY (\`maestroIdMaestro\`) REFERENCES \`maestro\`(\`id_maestro\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actividad\` ADD CONSTRAINT \`FK_cd12e6164dfa293949bf6e0468f\` FOREIGN KEY (\`estudianteIdEstudiante\`) REFERENCES \`estudiante\`(\`id_estudiante\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actividad\` ADD CONSTRAINT \`FK_dab61a9aa34e1ac233f039ce57d\` FOREIGN KEY (\`maestroIdMaestro\`) REFERENCES \`maestro\`(\`id_maestro\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`estudiante\` ADD CONSTRAINT \`FK_6cc5c3e605bf03ab2dbc39efab5\` FOREIGN KEY (\`id_estudiante\`) REFERENCES \`persona\`(\`id_persona\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`estudiante\` DROP FOREIGN KEY \`FK_6cc5c3e605bf03ab2dbc39efab5\``);
        await queryRunner.query(`ALTER TABLE \`actividad\` DROP FOREIGN KEY \`FK_dab61a9aa34e1ac233f039ce57d\``);
        await queryRunner.query(`ALTER TABLE \`actividad\` DROP FOREIGN KEY \`FK_cd12e6164dfa293949bf6e0468f\``);
        await queryRunner.query(`ALTER TABLE \`nota\` DROP FOREIGN KEY \`FK_e1b78311cf2141400cbe780a388\``);
        await queryRunner.query(`ALTER TABLE \`nota\` DROP FOREIGN KEY \`FK_76b30fffe5bb59ed8d60eb9cd33\``);
        await queryRunner.query(`ALTER TABLE \`maestro\` DROP FOREIGN KEY \`FK_2079a2d2ad24cca486c61f537d8\``);
        await queryRunner.query(`DROP TABLE \`estudiante\``);
        await queryRunner.query(`DROP TABLE \`actividad\``);
        await queryRunner.query(`DROP TABLE \`nota\``);
        await queryRunner.query(`DROP TABLE \`maestro\``);
        await queryRunner.query(`DROP TABLE \`persona\``);
    }

}

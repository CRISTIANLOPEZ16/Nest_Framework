import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './nota/nota.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MaestroModule } from './maestro/maestro.module';
import { PersonaModule } from './persona/persona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { typeOrmAsyncConfig } from './typeorm';
import { ActividadModule } from './actividad/actividad.module';

@Module({
  imports: [
    PersonaModule,
    MaestroModule,
    EstudianteModule,
    NotaModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        __dirname,
        '../../',
        `/config/env/.${process.env.NODE_ENV}.env`,
      ),
    }),
    ActividadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

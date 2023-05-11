import { Module } from '@nestjs/common';
import { MaestroService } from './maestro.service';
import { MaestroController } from './maestro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maestro } from './entities/maestro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maestro])],
  controllers: [MaestroController],
  providers: [MaestroService]
})
export class MaestroModule {}

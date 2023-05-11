import { Injectable } from '@nestjs/common';
import { CreateMaestroDto } from './dto/create-maestro.dto';
import { UpdateMaestroDto } from './dto/update-maestro.dto';

@Injectable()
export class MaestroService {
  create(createMaestroDto: CreateMaestroDto) {
    return 'This action adds a new maestro';
  }

  findAll() {
    return `This action returns all maestro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maestro`;
  }

  update(id: number, updateMaestroDto: UpdateMaestroDto) {
    return `This action updates a #${id} maestro`;
  }

  remove(id: number) {
    return `This action removes a #${id} maestro`;
  }
}

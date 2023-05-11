import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaestroService } from './maestro.service';
import { CreateMaestroDto } from './dto/create-maestro.dto';
import { UpdateMaestroDto } from './dto/update-maestro.dto';

@Controller('maestro')
export class MaestroController {
  constructor(private readonly maestroService: MaestroService) {}

  @Post()
  create(@Body() createMaestroDto: CreateMaestroDto) {
    return this.maestroService.create(createMaestroDto);
  }

  @Get()
  findAll() {
    return this.maestroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maestroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaestroDto: UpdateMaestroDto) {
    return this.maestroService.update(+id, updateMaestroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maestroService.remove(+id);
  }
}

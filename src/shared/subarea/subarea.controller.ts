import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { SubareaService } from './subarea.service';
import {CreateSubareaDto} from "./dto/subarea.dto";
import {SubareaEntity} from "./entities/subarea.entity";
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";
@ApiTags('subarea')
@Controller('subarea')
export class SubareaController {
  constructor(private readonly subareaService: SubareaService) {}
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getAllSubareas() {
      return this.subareaService.getAllSubareas();
  }
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiProperty({
    description: 'Identificador del área a la que pertenece la subárea',
    example: 1,
  })
  async createSubarea(@Body() subarea : CreateSubareaDto): Promise<SubareaEntity> {
      return await this.subareaService.create(subarea);
  }
}

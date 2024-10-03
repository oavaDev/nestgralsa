import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { SubareaService } from './subarea.service';
import {CreateSubareaDto} from "./dto/subarea.dto";
import {SubareaEntity} from "./entities/subarea.entity";
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";
import {createResponse} from "../../utils/shared/response.util";
import {ResponseEntity} from "../entity/response.entity";
@ApiTags('subarea')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('subarea')
export class SubareaController {
  constructor(private readonly subareaService: SubareaService) {}
  @Get()
  async getAllSubareas() {
    try {
      return createResponse(await this.subareaService.getAllSubareas(), "Subáreas obtenidas con éxito", 200);
    }catch (e){
      return createResponse([], "Error al obtener las subáreas", 500);
    }
  }
  @Post()
  @ApiProperty({
    description: 'Identificador del área a la que pertenece la subárea',
    example: 1,
  })
  async createSubarea(@Body() subarea : CreateSubareaDto): Promise<ResponseEntity> {
    try {
      return createResponse(await this.subareaService.create(subarea), "Subárea creada con éxito", 200);
    }catch (e){
      return createResponse([], "Error al crear la subárea", 500);
    }
  }
}

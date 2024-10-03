import {Controller, Get, UseGuards} from '@nestjs/common';
import { AreaService } from './area.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";

@ApiTags('area')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}
  @Get()
  async getAllAreas() {
    try {
      return createResponse(await this.areaService.getAllAreas(), "Áreas obtenidas con éxito", 200);
    }catch (e) {
      return createResponse([], "Error al obtener las áreas", 500);
    }
  }
}

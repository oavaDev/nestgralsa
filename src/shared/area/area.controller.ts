import {Controller, Get} from '@nestjs/common';
import { AreaService } from './area.service';
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";

@Controller('area')
@ApiTags('area')
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

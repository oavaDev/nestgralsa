import {Controller, Get} from '@nestjs/common';
import { CriticalityLevelService } from './criticality-level.service';
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";

@Controller('criticality-level')
@ApiTags('criticality-level')
export class CriticalityLevelController {
  constructor(private readonly criticalityLevelService: CriticalityLevelService) {}
  @Get()
  async getAll() {
      try {
            return createResponse(await this.criticalityLevelService.getAll(), "Niveles de criticidad obtenidos con éxito", 200);
      }catch (error) {
            return createResponse([], "Error al obtener los niveles de criticidad", 500);
      }
  }
}

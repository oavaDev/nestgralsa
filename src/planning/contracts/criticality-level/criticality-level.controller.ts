import {Controller, Get, UseGuards} from '@nestjs/common';
import { CriticalityLevelService } from './criticality-level.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";

@ApiTags('criticallity-level')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('criticallity-level')
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

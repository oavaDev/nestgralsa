import {Controller, Get, UseGuards} from '@nestjs/common';
import { ManagementLevelService } from './management-level.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";
import {createResponse} from "../../../utils/shared/response.util";

@ApiTags('management-level')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('management-level')
export class ManagementLevelController {
  constructor(private readonly managementLevelService: ManagementLevelService) {}
  @Get()
  async findAll() {
      try {
        return createResponse(await this.managementLevelService.findAll(), "Niveles de gestión obtenidos con éxito", 200);
      }catch (e){
        return createResponse([], "Error al obtener los niveles de gestión", 500);
      }
  }
}


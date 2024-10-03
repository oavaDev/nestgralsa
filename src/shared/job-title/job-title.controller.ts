import {Controller, Get, UseGuards} from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";

@ApiTags('job-title')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('job-title')
export class JobTitleController {
  constructor(private readonly jobTitleService: JobTitleService) {}
  @Get()
    async findAll() {
      try {
          return createResponse(await this.jobTitleService.findAll(), "Cargos encontrados", 200);
      }catch (e) {
          return createResponse([], "Error encontrando cargos", 500);
      }
    }
}

import {Controller, Get} from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../utils/shared/response.util";

@Controller('job-title')
@ApiTags('job-title')
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

import {Controller, Get} from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('job-title')
@ApiTags('job-title')
export class JobTitleController {
  constructor(private readonly jobTitleService: JobTitleService) {}

  @Get()
    findAll() {
        return this.jobTitleService.findAll();
    }
}

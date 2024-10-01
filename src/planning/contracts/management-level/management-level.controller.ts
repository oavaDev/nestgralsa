import {Controller, Get} from '@nestjs/common';
import { ManagementLevelService } from './management-level.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('management-level')
@ApiTags('management-level')
export class ManagementLevelController {
  constructor(private readonly managementLevelService: ManagementLevelService) {}
  @Get()
  async findAll() {
      return this.managementLevelService.findAll();
  }
}


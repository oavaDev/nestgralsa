import {Controller, Get} from '@nestjs/common';
import { CriticalityLevelService } from './criticality-level.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('criticality-level')
@ApiTags('criticality-level')
export class CriticalityLevelController {
  constructor(private readonly criticalityLevelService: CriticalityLevelService) {}
  @Get()
  async getAll() {
        return this.criticalityLevelService.getAll();
  }
}

import {Controller, Get} from '@nestjs/common';
import { AreaService } from './area.service';
import {ApiTags} from "@nestjs/swagger";

@Controller('area')
@ApiTags('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}
  @Get()
  async getAllAreas() {
    return this.areaService.getAllAreas();
  }
}

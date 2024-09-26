import {Controller, Get, Inject} from '@nestjs/common';
import { CurencyService } from './curency.service';
import {ApiProperty, ApiTags} from "@nestjs/swagger";

@Controller('curency')
@ApiTags('curency')
export class CurencyController {
  constructor(
    private readonly curencyService: CurencyService
  ) {
  }
  @Get()
  async getCurrency() {
    return this.curencyService.findAll();
  }
}

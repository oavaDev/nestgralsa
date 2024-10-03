import {Controller, Get, Inject} from '@nestjs/common';
import { CurencyService } from './curency.service';
import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";

@Controller('curency')
@ApiTags('curency')
export class CurencyController {
  constructor(
    private readonly curencyService: CurencyService
  ) {
  }
  @Get()
  async getCurrency() {
    try {
      createResponse(this.curencyService.findAll(), "Monedas encontradas", 200);
    }catch (e) {
      createResponse([], "Error encontrando monedas", 500);
    }
  }
}

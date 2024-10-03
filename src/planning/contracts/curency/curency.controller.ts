import {Controller, Get, Inject, UseGuards} from '@nestjs/common';
import { CurencyService } from './curency.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";

@ApiTags('curency')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('curency')
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

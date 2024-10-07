import {Controller, Get, Inject, UseGuards} from '@nestjs/common';
import { CurencyService } from './curency.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";

@ApiTags('currency')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('currency')
export class CurencyController {
  constructor(
    private readonly curencyService: CurencyService
  ) {
  }
  @Get()
  async getCurrency() {
    try {
      const response = await this.curencyService.findAll();
      return createResponse(response, "Monedas encontradas", 200);
    }catch (e) {
      return createResponse([], "Error encontrando monedas", 500);
    }
  }
}

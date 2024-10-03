import {Controller, Get, UseGuards} from '@nestjs/common';
import { ManagementLevelService } from './management-level.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";

@ApiTags('management-level')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('management-level')
export class ManagementLevelController {
  constructor(private readonly managementLevelService: ManagementLevelService) {}
  @Get()
  async findAll() {
      return this.managementLevelService.findAll();
  }
}


import {Body, Controller, Get, Logger, Param, Post, UseGuards} from '@nestjs/common';
import { ContractService } from './contract.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {ContractEntity} from "./entities/contract.entity";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";
import {CreateContractDto} from "./dto/create-contract.dto";
import {ContractFileEntity} from "../contract-file/entities/contract-file.entity";
import {ResponseEntity} from "../../../shared/entity/response.entity";
import {createResponse} from "../../../utils/shared/response.util";

@Controller('contract')
@ApiTags('contract')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ContractController {
  constructor(private readonly contractService: ContractService) {}
  @Get()
  async findAll() {
      return await this.contractService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ContractEntity> {
    return await this.contractService.findOne(id);
  }
  @Post()
  @ApiProperty({
    description: 'Identificador del área a la que pertenece la subárea',
    example: 1,
  })
  async create(@Body() contract: CreateContractDto): Promise<ResponseEntity> {
      const data = await this.contractService.create(contract);
      return createResponse(data, "Contrato creado con éxito", 201);
  }
}

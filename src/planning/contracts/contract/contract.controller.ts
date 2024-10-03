import {Body, Controller, Get, Logger, Param, Post, UseGuards} from '@nestjs/common';
import { ContractService } from './contract.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {ContractEntity} from "./entities/contract.entity";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";
import {CreateContractDto} from "./dto/create-contract.dto";
import {ContractFileEntity} from "../contract-file/entities/contract-file.entity";
import {ResponseEntity} from "../../../shared/entity/response.entity";
import {createResponse} from "../../../utils/shared/response.util";

@ApiTags('contract')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}
  @Get()
  async findAll() {
      try {
        return createResponse(await this.contractService.findAll(), "Contratos encontrados", 200);
      }catch (e) {
        return createResponse(null, "Error al buscar los contratos", 500);
      }
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ResponseEntity> {
    try {
      return createResponse(await this.contractService.findOne(id), "Contrato encontrado", 200);
    }catch (e) {
      return createResponse(null, "Error al buscar el contrato", 500);
    }
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

import {Body, Controller, Get, Logger, Param, Post, UseGuards} from '@nestjs/common';
import { ContractService } from './contract.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {ContractEntity} from "./entities/contract.entity";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";
import {CreateContractDto} from "./dto/create-contract.dto";

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
    console.log(id)
    return await this.contractService.findOne(id);
  }
  @Post()
  @ApiProperty({
    description: 'Identificador del área a la que pertenece la subárea',
    example: 1,
  })
  async create(@Body() contract: CreateContractDto): Promise<ContractEntity> {
      console.log(contract)
      return await this.contractService.create(contract);
  }
}

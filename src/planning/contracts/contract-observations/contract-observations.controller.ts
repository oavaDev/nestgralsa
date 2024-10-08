import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ContractObservationsService } from './contract-observations.service';
import {ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";
import {SaveContractObservationDto} from "./dto/SaveContractObservation.dto";

@Controller('contract-observations')
@ApiTags('contract-observations')
export class ContractObservationsController {
  constructor(private readonly contractObservationsService: ContractObservationsService
  ) {}

  @Get(':id')
    async getContractObservationsById(@Param('id') id: number) {
      try {
        const data = await this.contractObservationsService.getContractObservationsByContractId(id);
        return createResponse(data, 'Observaciones del contrato obtenidas correctamente', 200);
      }catch (e){
          return createResponse(null, e.message, 500);
      }
    }
  @Post()
    async createContractObservation(@Body() contractObservation: SaveContractObservationDto) {
      try {
        const data = await this.contractObservationsService.createContractObservation(contractObservation);
        return createResponse(data, 'Observación del contrato creada correctamente', 200);
      }catch (e){
          return createResponse(null, e.message, 500);
      }
    }
}

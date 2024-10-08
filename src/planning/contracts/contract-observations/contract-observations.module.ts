import { Module } from '@nestjs/common';
import { ContractObservationsService } from './contract-observations.service';
import { ContractObservationsController } from './contract-observations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContractObservationsEntity} from "./entities/contract-observations.entity";

@Module({
  imports:[
      TypeOrmModule.forFeature([ContractObservationsEntity])
  ],
  controllers: [ContractObservationsController],
  providers: [ContractObservationsService],
})
export class ContractObservationsModule {}

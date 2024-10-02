import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContractEntity} from "./entities/contract.entity";
import {DocumentTypeEntity} from "../document_type/entities/document-type.entity";
import {CurrencyEntity} from "../curency/entities/currency.entity";
import {AreaEntity} from "../../../shared/area/entities/area.entity";
import {CriticallityLevelEntity} from "../criticality-level/entities/criticallity-level.entity";
import {ManagementLevelEntity} from "../management-level/entities/management-level.entity";

@Module({
  imports:[TypeOrmModule.forFeature([ContractEntity,
    DocumentTypeEntity,
    CurrencyEntity,
    AreaEntity,
    CriticallityLevelEntity,
      ManagementLevelEntity
  ])],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}

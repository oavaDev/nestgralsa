import { Module } from '@nestjs/common';
import { ContractFileService } from './contract-file.service';
import { ContractFileController } from './contract-file.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContractFileEntity} from "./entities/contract-file.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ContractFileEntity])],
  controllers: [ContractFileController],
  providers: [ContractFileService],
})
export class ContractFileModule {}

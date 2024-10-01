import { Module } from '@nestjs/common';
import { ManagementLevelService } from './management-level.service';
import { ManagementLevelController } from './management-level.controller';
import {ManagementLevelEntity} from "./entities/management-level.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports : [
      TypeOrmModule.forFeature([ManagementLevelEntity])
  ],
  controllers: [ManagementLevelController],
  providers: [ManagementLevelService],
})
export class ManagementLevelModule {}

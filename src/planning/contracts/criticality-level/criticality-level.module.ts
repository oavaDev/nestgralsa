import { Module } from '@nestjs/common';
import { CriticalityLevelService } from './criticality-level.service';
import { CriticalityLevelController } from './criticality-level.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CriticallityLevelEntity} from "./entities/criticallity-level.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([CriticallityLevelEntity])
  ],
  controllers: [CriticalityLevelController],
  providers: [CriticalityLevelService],
})
export class CriticalityLevelModule {}

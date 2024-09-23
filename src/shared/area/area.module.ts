import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import {AreaEntity} from "./entities/area.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RoleEntity} from "../role/entities/role.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([AreaEntity]),
  ],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}

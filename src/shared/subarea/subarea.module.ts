import { Module } from '@nestjs/common';
import { SubareaService } from './subarea.service';
import { SubareaController } from './subarea.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubareaEntity} from "./entities/subarea.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([SubareaEntity]),
  ],
  controllers: [SubareaController],
  providers: [SubareaService],
})
export class SubareaModule {}

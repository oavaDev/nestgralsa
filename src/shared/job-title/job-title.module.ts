import { Module } from '@nestjs/common';
import { JobTitleService } from './job-title.service';
import { JobTitleController } from './job-title.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {JobTitleEntity} from "./entities/job-title.entity";

@Module({
  imports:[
      TypeOrmModule.forFeature([JobTitleEntity])
  ],
  controllers: [JobTitleController],
  providers: [JobTitleService],
})
export class JobTitleModule {}
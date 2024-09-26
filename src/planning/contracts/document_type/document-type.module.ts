import { Module } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeController } from './document-type.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DocumentTypeEntity} from "./entities/document-type.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentTypeEntity]),
  ],
  controllers: [DocumentTypeController],
  providers: [DocumentTypeService],
})
export class DocumentTypeModule {}

import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DocumentTypeEntity} from "./entities/document-type.entity";
import {Repository} from "typeorm";

@Injectable()
export class DocumentTypeService {
    constructor(
        @InjectRepository(DocumentTypeEntity)
        private readonly documentRepository: Repository<DocumentTypeEntity>
    ) {}

    async findAll(): Promise<DocumentTypeEntity[]> {
        return this.documentRepository.find();
    }
}

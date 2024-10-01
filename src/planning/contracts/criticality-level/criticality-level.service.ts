import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CriticallityLevelEntity} from "./entities/criticallity-level.entity";

@Injectable()
export class CriticalityLevelService {
    constructor(
        @InjectRepository(CriticallityLevelEntity)
        private readonly criticalityLevelRepository: Repository<CriticallityLevelEntity>
    ) {
    }
    async getAll() {
        return await this.criticalityLevelRepository.find();
    }
}

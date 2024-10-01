import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {ManagementLevelEntity} from "./entities/management-level.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ManagementLevelService {
    constructor(
        @InjectRepository(ManagementLevelEntity)
        private readonly managementLevelRepository: Repository<ManagementLevelEntity>
    ) {
    }
    async findAll() {
        return await this.managementLevelRepository.find();
    }

}

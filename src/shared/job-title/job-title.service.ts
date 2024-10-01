import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {JobTitleEntity} from "./entities/job-title.entity";
import {Repository} from "typeorm";

@Injectable()
export class JobTitleService {
    constructor(
        @InjectRepository(JobTitleEntity)
        private readonly jobTitleRepository: Repository<JobTitleEntity>,
    ) {}
    async findAll(): Promise<JobTitleEntity[]> {
        return this.jobTitleRepository.find({relations: ['area']});
    }
}

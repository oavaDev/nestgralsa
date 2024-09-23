import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {SubareaEntity} from "./entities/subarea.entity";
import {CreateSubareaDto} from "./dto/subarea.dto";
import {AuthRegisterDto} from "../../security/authentication/interfaces/authRegisterDTO.entity";
import {UserEntity} from "../user/entities/user.entity";
import {AreaEntity} from "../area/entities/area.entity";

@Injectable()
export class SubareaService {
    constructor(
        @InjectRepository(SubareaEntity)
        private readonly subareaRepository: Repository<SubareaEntity>,
    ) {
    }
    async getAllSubareas() : Promise<SubareaEntity[]> {
        return await this.subareaRepository.find({
            relations : [
                'area',
            ]
        })
    }
    async create(subarea: CreateSubareaDto) : Promise<SubareaEntity>   {
        const subareaData = this.subareaRepository.create(subarea);
        return this.subareaRepository.save(subareaData);
    }
}


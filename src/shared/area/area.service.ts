import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AreaEntity} from "./entities/area.entity";
import {Repository} from "typeorm";

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(AreaEntity)
        private readonly areaRepository: Repository<AreaEntity>,
    ) {
    }
    async getAllAreas() : Promise<AreaEntity[]> {
        return this.areaRepository.find({
            relations : [
                'subarea.area',
            ]
        })
    }
}

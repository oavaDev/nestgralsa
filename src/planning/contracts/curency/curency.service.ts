import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CurrencyEntity} from "./entities/currency.entity";
import {Repository} from "typeorm";

@Injectable()
export class CurencyService {
    constructor(
        @InjectRepository(CurrencyEntity)
        private readonly curencyRepository: Repository<CurrencyEntity>
    ) {}

    async findAll(): Promise<CurrencyEntity[]> {
        return this.curencyRepository.find();
    }
}

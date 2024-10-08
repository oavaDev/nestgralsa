import { Injectable } from '@nestjs/common';
import {ContractObservationsEntity} from "./entities/contract-observations.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ContractObservationsService {
    constructor(
        @InjectRepository(ContractObservationsEntity)
        private contractObservationsRepository
    ) {}

    async getContractObservationsByContractId(contractId: number) {
        return await this.contractObservationsRepository.find({
            where: {
                contract: {
                    id: contractId,
                },
            },
        });
    }

}

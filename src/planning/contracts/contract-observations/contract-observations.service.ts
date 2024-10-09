import { Injectable } from '@nestjs/common';
import {ContractObservationsEntity} from "./entities/contract-observations.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {SaveContractObservationDto} from "./dto/SaveContractObservation.dto";

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
    async createContractObservation(contractObservation: SaveContractObservationDto) {
        let contractObs = new ContractObservationsEntity();
        contractObs.description = contractObservation.description;
        contractObs.user_id = contractObservation.user_id;
        contractObs.user = contractObservation.user;
        contractObs.job_title = contractObservation.job_title;
        contractObs.contract = {
            id: contractObservation.contract_id,
        };
        return await this.contractObservationsRepository.save(contractObs);
    }
}

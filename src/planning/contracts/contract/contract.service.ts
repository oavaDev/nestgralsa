import { Injectable } from '@nestjs/common';
import {ContractEntity} from "./entities/contract.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateContractDto} from "./dto/create-contract.dto";
import {DocumentTypeEntity} from "../document_type/entities/document-type.entity";
import {CurrencyEntity} from "../curency/entities/currency.entity";
import {AreaEntity} from "../../../shared/area/entities/area.entity";
import {CriticallityLevelEntity} from "../criticality-level/entities/criticallity-level.entity";
import {ManagementLevelEntity} from "../management-level/entities/management-level.entity";

@Injectable()
export class ContractService {
    constructor(
        @InjectRepository(ContractEntity)
        private readonly contractRepository: Repository<ContractEntity>,
        @InjectRepository(DocumentTypeEntity)
        private readonly documentTypeRepository: Repository<DocumentTypeEntity>,
        @InjectRepository(CurrencyEntity)
        private readonly currencyRepository: Repository<CurrencyEntity>,
        @InjectRepository(AreaEntity)
        private readonly areaRepository: Repository<AreaEntity>,
        @InjectRepository(CriticallityLevelEntity)
        private readonly criticallityLevelRepository: Repository<CriticallityLevelEntity>,
        @InjectRepository(ManagementLevelEntity)
        private readonly managementLevelRepository: Repository<ManagementLevelEntity>,
    ) {}
    async findAll(): Promise<ContractEntity[]> {
        return await this.contractRepository.find();
    }
    async findOne(id: number): Promise<ContractEntity> {
        return await this.contractRepository.findOne({
            where: { id },
        });
    }
    async create(contract: CreateContractDto): Promise<ContractEntity> {
        const newContract = new ContractEntity();
        newContract.name = contract.name;
        newContract.contract_code = contract.contract_code;
        newContract.contract_value = contract.contract_value;
        newContract.issued_on = contract.issued_on;
        newContract.expiration_date = contract.expiration_date;
        newContract.validity = contract.validity;
        newContract.status = contract.status;
        newContract.document_type = await this.documentTypeRepository.findOne({
            where: { id: contract.document_type },
        });
        newContract.currency = await this.currencyRepository.findOne({
            where: { id: contract.currency },
        });
        newContract.area = await this.areaRepository.findOne({
            where: { id: contract.area },
        });
        newContract.criticallity_level = await this.criticallityLevelRepository.findOne({
            where: { id: contract.criticallity_level },
        });
        newContract.management_level = await this.managementLevelRepository.findOne({
            where: { id: contract.management_level },
        });
        newContract.observations = contract.observations;
        return await this.contractRepository.save(newContract);
    }
}

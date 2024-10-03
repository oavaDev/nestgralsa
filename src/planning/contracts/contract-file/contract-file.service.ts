import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ContractFileEntity} from "./entities/contract-file.entity";
import {Repository} from "typeorm";
import {CreateContractFileDto} from "./dto/create-contract-file.dto";
import {ContractEntity} from "../contract/entities/contract.entity";
import {ContractFileWBufferDto} from "./dto/contract-file-w-buffer.dto";
import {Response} from 'express';
@Injectable()
export class ContractFileService {
    constructor(
        @InjectRepository(ContractFileEntity)
        private readonly contractFileRepository: Repository<ContractFileEntity>,
    ) {}
    async getFilesByContract(contractId: number): Promise<ContractFileWBufferDto[]> {
        const files = await this.contractFileRepository. createQueryBuilder('contractFile')
            .where('contractFile.contractId = :contractId', { contractId })
            .getMany();
        return files.map(file => ({
            id: file.id,
            file_name: file.file_name,
            uploaded_on: file.uploaded_on
        }));
    }
    async downloadFile(fileId: number, res: Response): Promise<void> {
        // Fetch the file from the database
        const file = await this.contractFileRepository.findOne({
            where: { id: fileId },
        });

        if (!file) {
            throw new NotFoundException('File not found');
        }
        // Set response headers for PDF file download
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${file.file_name}"`,
        });
        // Send the binary data as a response
        res.send(file.file_data);  // `file_data` is the `Buffer` storing the PDF
    }
    async uploadFile(data: CreateContractFileDto, file: Express.Multer.File): Promise<ContractFileEntity> {
        // Create a new ContractFileEntity instance
        const contractFile = new ContractFileEntity();
        contractFile.file_name = file.originalname; // Set the file name
        contractFile.file_data = file.buffer; // Store the file as binary data
        contractFile.uploaded_on = new Date(); // Set the upload date
        contractFile.contract = { id: data.contract_id } as ContractEntity; // Associate the contract by ID

        try {
            // Save the contract file entity to the database
            return await this.contractFileRepository.save(contractFile);
        } catch (error) {
            // Handle potential errors
            throw new HttpException('Error saving the file', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

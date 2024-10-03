import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {ContractEntity} from "../../contract/entities/contract.entity";
import { Buffer } from 'buffer';
@Entity('contract_file_entity')
export class ContractFileEntity {
    @ApiProperty({
        description: 'Identificador único del archivo',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Nombre del archivo PDF',
        example: 'contrato_prueba.pdf',
    })
    @Column()
    file_name: string;

    @ApiProperty({
        description: 'Archivo PDF en formato binario',
    })
    @Column({ type: 'bytea' })
    file_data: Buffer;

    @ApiProperty({
        description: 'Fecha de carga del archivo',
        example: '01/01/2024',
    })
    @Column()
    uploaded_on: Date;

    @ManyToOne(() => ContractEntity, contract => contract.files)
    contract: ContractEntity;
}

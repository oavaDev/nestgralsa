
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {ContractEntity} from "../../contract/entities/contract.entity";
import { Buffer } from 'buffer';
@Entity('contract_observations_entity')
export class ContractObservationsEntity {
    @ApiProperty({
        description: 'Identificador único del comentario',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Contenido del comentario',
        example: 'Test',
    })
    @Column()
    description: string;

    @ApiProperty({
        description: 'Fecha del comentario',
        example: '01/01/2024',
    })
    @Column({
        default: () => 'CURRENT_TIMESTAMP',
    })
    uploaded_on: Date;
    @ApiProperty({
        description: 'Fecha de carga del archivo',
        example: '01/01/2024',
    })
    @Column()
    user_id: number;
    @ManyToOne(() => ContractEntity, contract => contract.observations)
    contract: ContractEntity;
}

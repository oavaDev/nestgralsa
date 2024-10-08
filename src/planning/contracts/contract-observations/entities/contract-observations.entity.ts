
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
        description: 'Id del usuario que subió el comentario',
        example: '111111111',
    })
    @Column()
    user_id: number;
    @ApiProperty({
        description: 'Fecha del comentario',
        example: '01/01/2024',
    })
    @Column({
        default: () => 'CURRENT_TIMESTAMP',
    })
    uploaded_on: Date;
    @ManyToOne(() => ContractEntity, contract => contract.observations)
    contract: { id: number };
}

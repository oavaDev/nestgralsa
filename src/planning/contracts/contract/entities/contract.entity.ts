import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {DocumentTypeEntity} from "../../document_type/entities/document-type.entity";
import {CurrencyEntity} from "../../curency/entities/currency.entity";
import {AreaEntity} from "../../../../shared/area/entities/area.entity";
import {CriticallityLevelEntity} from "../../criticality-level/entities/criticallity-level.entity";
import {ManagementLevelEntity} from "../../management-level/entities/management-level.entity";

@Entity('contract_entity')
export class ContractEntity {
    @ApiProperty({
        description: 'Identificador único del contrato',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Tipo de documento',
        example: 'Contrato',
    })
    @ManyToOne(() => DocumentTypeEntity, documentType => documentType.id )
    document_type: DocumentTypeEntity;

    @ApiProperty({
        description: 'Nombre del contrato',
        example: 'Contrato de prueba',
    })
    @Column()
    name: string;

    @ApiProperty({
        description: 'Codigo del contrato',
        example: '05799 de 7-Ene-00',
    })
    @Column()
    contract_code: string;

    @ApiProperty({
        description: 'Valor del contrato',
        example: '1000000',
    })
    @Column({
        type: 'decimal',
        precision: 15,
        scale: 2,
    })
    contract_value:number;

    @ManyToOne(() => CurrencyEntity, currencyEntity => currencyEntity.id )
    currency: CurrencyEntity;

    @ApiProperty({
        description: 'Fecha de emision del contrato',
        example: '01/01/2024',
    })
    @Column()
    issued_on: Date;

    @ApiProperty({
        description: 'Fecha de vencimiento del contrato',
        example: '01/01/2024',
    })
    @Column()
    expiration_date: Date;

    @ApiProperty({
        description: 'Vigencia del contrato',
        example: '152',
    })
    @Column()
    validity: Date;

    @ApiProperty({
        description: 'Area del contrato',
        example: 'TIC',
    })
    @ManyToOne(() => AreaEntity, areaEntity => areaEntity.id)
    area: AreaEntity;

    @ApiProperty({
        description: 'Estado del contrato',
        example: 'Activo',
    })
    @Column()
    status: string;

    @ApiProperty({
        description: "Nivel de gestión",
        example: "EN TRAMITE"
    })
    @ManyToOne(() => ManagementLevelEntity, managementLevelEntity => managementLevelEntity.id)
    management_level: CriticallityLevelEntity;
    @ApiProperty({
        description: "Nivel de criticalidad",
        example: "Alto"
    })
    @ManyToOne(() => CriticallityLevelEntity, criticallityLevelEntity => criticallityLevelEntity.id)
    criticallity_level: CriticallityLevelEntity;
    @ApiProperty({
        description: 'Observaciones',
        example: 'Contrato de prueba',
    })
    @Column({
        nullable: true
    })
    observations: string;
}

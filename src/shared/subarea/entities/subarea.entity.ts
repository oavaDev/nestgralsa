import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AreaEntity } from '../../area/entities/area.entity'
import {JoinColumn} from "typeorm/browser";

@Entity('subarea_entity')
export class SubareaEntity {
    @ApiProperty({
        description: 'Identificador único de la subárea',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({
        description: 'Descripción de la subárea',
        example: 'Finanzas',
    })
    @Column()
    description: string;
    @ApiProperty({
        description: 'Identificador del área asociada',
        example: 1,
    })
    @ManyToOne(() => AreaEntity, (area) => area.id)
    area: number;
}

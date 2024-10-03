import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SubareaEntity } from '../../subarea/entities/subarea.entity';
import {AreaEntity} from "../../area/entities/area.entity";

@Entity('job_title_entity')
export class JobTitleEntity {
    @ApiProperty({
        description: 'Identificador único del cargo',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({
        description: 'Descripción del cargo',
        example: 'Analista IT',
    })
    @Column()
    description: string;
    @ManyToOne(() => AreaEntity, area => area.id)
    area: number;
}

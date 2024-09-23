import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SubareaEntity } from '../../subarea/entities/subarea.entity';

@Entity('area_entity')
export class AreaEntity {
    @ApiProperty({
        description: 'Identificador único del área',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción del área',
        example: 'Administración',
    })
    @Column()
    descripcion: string;

    @OneToMany(() => SubareaEntity, (subarea) => subarea.area)
    subarea: SubareaEntity[];
}

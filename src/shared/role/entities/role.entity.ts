import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AplicationEntity } from '../../aplication/entities/aplication.entity';
import { AreaEntity } from '../../area/entities/area.entity';
import { SubareaEntity } from '../../subarea/entities/subarea.entity'

@Entity('role_entity')
export class RoleEntity {
    @ApiProperty({
        description: 'Identificador único del rol',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción del rol',
        example: 'Administrador',
    })
    @Column()
    descripcion: string;

    @ApiProperty({
        description: 'Identificador de la aplicación',
        example: 1,
    })
    @ManyToOne(() => AplicationEntity, (aplicacion) => aplicacion.id)
    aplicacion: AplicationEntity;

    @ApiProperty({
        description: 'Identificador del área',
        example: 1,
    })
    @ManyToOne(() => AreaEntity, (area) => area.id)
    area: AreaEntity;

    @ApiProperty({
        description: 'Identificador de la subárea',
        example: 1,
    })
    @ManyToOne(() => SubareaEntity, (subarea) => subarea.id)
    subarea: SubareaEntity;

    @ApiProperty({
        description: 'Menú asociado al rol (JSON)',
        example: '{"items": ["Dashboard", "Settings"]}',
    })
    @Column({ type: 'json' })
    menu: any;
}

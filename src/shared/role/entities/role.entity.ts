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
        example: '[\n' +
            '  {\n' +
            '    "linkText": "Inicio",\n' +
            '    "parentLink": "/",\n' +
            '    "menu": false,\n' +
            '    "iconClass": "home",\n' +
            '    "submenu": []\n' +
            '  },\n' +
            '  {\n' +
            '    "linkText": "Planeacion",\n' +
            '    "parentLink": "",\n' +
            '    "menu": false,\n' +
            '    "iconClass": "dashboard",\n' +
            '    "submenu": [\n' +
            '      {\n' +
            '        "childtext": "Contratos",\n' +
            '        "link": "",\n' +
            '        "submenuItems": [\n' +
            '          {\n' +
            '            "childtext": "Visualizar",\n' +
            '            "link": "/contracts"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            ']',
    })
    @Column({ type: 'json' })
    menu: any;
}

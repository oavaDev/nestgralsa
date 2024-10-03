import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty({
        description: 'Descripción del rol',
        example: 'Administrador',
    })
    @IsString()
    descripcion: string;

    @ApiProperty({
        description: 'Identificador de la aplicación asociada al rol',
        example: 1,
    })
    @IsNumber()
    aplicacion_id: number;

    @ApiProperty({
        description: 'Identificador del área asociada al rol',
        example: 1,
    })
    @IsNumber()
    area_id: number;

    @ApiProperty({
        description: 'Identificador de la subárea asociada al rol',
        example: 2,
    })
    @IsNumber()
    subarea_id: number;

    @ApiProperty({
        description: 'Menú de la aplicación asociado al rol (en formato JSON)',
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
    menu: any;
}

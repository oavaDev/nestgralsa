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
        example: '{"items": ["Dashboard", "Settings"]}',
    })
    menu: any;
}

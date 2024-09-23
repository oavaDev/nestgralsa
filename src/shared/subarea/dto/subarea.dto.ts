import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator";
import {AreaEntity} from "../../area/entities/area.entity";

export class CreateSubareaDto {
    @IsNotEmpty()
    @ApiProperty({
        description: 'Descripción de la subárea',
        example: 'Finanzas',
    })
    description: string;
    @IsNotEmpty()
    @ApiProperty({
        description: 'Identificador del área a la que pertenece la subárea',
        example: 1,
    })
    area: number;
}

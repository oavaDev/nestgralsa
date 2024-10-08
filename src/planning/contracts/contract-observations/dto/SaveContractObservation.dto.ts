import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class SaveContractObservationDto {
    @ApiProperty({
        description: 'Contenido del comentario',
        example: 'Test',
    })
    @IsNotEmpty()
    description: string;
    @ApiProperty({
        description: 'Id del usuario que subió el comentario',
        example: '111111111',
    })
    @IsNotEmpty()
    user_id: number;
    @ApiProperty({
        description: 'Fecha del comentario',
        example: '01/01/2024',
    })
    @IsNotEmpty()
    uploaded_on: Date;
    @ApiProperty({
        description: 'Id del contrato',
        example: '10',
    })
    @IsNotEmpty()
    contract_id: number;
}
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
        description: 'Id del contrato',
        example: '10',
    })
    @IsNotEmpty()
    contract_id: number;
    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Omar Vega',
    })
    @IsNotEmpty()
    user: string;
    @ApiProperty({
        description: 'Cargo del usuario',
        example: 'this.sistems_engineer.getAll()',
    })
    job_title: string;
}
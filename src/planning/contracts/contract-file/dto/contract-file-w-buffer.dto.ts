import {ApiProperty} from "@nestjs/swagger";

export class ContractFileWBufferDto {
    @ApiProperty({
        description: 'Identificador único del archivo',
        example: 1,
    })
    id: number;
    @ApiProperty({
        description: 'Nombre del archivo PDF',
        example: 'contrato_prueba.pdf',
    })
    file_name: string;

    @ApiProperty({
        description: 'Fecha de carga del archivo',
        example: '01/01/2024',
    })
    uploaded_on: Date;
}

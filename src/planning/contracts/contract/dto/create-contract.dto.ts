import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator";
export class CreateContractDto {
    @IsNotEmpty()
    @ApiProperty({
        description: 'Tipo de documento',
        example: 1,  // ID del tipo de documento
    })
    document_type: number;
    @IsNotEmpty()
    @ApiProperty({
        description: 'Moneda del contrato',
        example: 1,  // ID de la moneda
    })
    currency: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Área del contrato',
        example: 1,  // ID del área
    })
    area: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Nivel de criticalidad',
        example: 1,  // ID del nivel de criticalidad
    })
    criticallity_level: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Nivel de gestión',
        example: 1,  // ID del nivel de gestión
    })
    management_level: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Nombre del contrato',
        example: 'Contrato de Mantenimiento General',
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Código del contrato',
        example: 'CON-2023-001',
    })
    contract_code: string;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Valor total del contrato',
        example: 150000.50,
    })
    contract_value: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Fecha en que se emitió el contrato',
        example: '2023-01-15',
    })
    issued_on: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Fecha de expiración del contrato',
        example: '2024-01-15',
    })
    expiration_date: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Fecha de validez del contrato',
        example: '2023-12-31',
    })
    validity: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Estado actual del contrato',
        example: 'Activo',
    })
    status: string;

    @ApiProperty({
        description: 'Observaciones adicionales sobre el contrato',
        example: 'El contrato incluye cláusulas especiales de penalización por retraso.',
    })
    @IsNotEmpty()
    observations: string;
}

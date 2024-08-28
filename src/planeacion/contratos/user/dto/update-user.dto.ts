import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsOptional, IsString} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'Nombre completo del usuario',
        example: 'Juan Perez',
        required: false,
    })
    @IsOptional()
    @IsString()
    nombre?: string;

    @ApiProperty({
        description: 'Nombre de usuario',
        example: 'juanperez',
        required: false,
    })
    @IsOptional()
    @IsString()
    usuario?: string;

    @ApiProperty({
        description: 'Número de identificación del usuario',
        example: '12345678',
        required: false,
    })
    @IsOptional()
    @IsString()
    n_identificacion?: string;

    @ApiProperty({
        description: 'Área a la que pertenece el usuario',
        example: 'Recursos Humanos',
        required: false,
    })
    @IsOptional()
    @IsString()
    area?: string;

    @ApiProperty({
        description: 'Subárea a la que pertenece el usuario',
        example: 'Contratación',
        required: false,
    })
    @IsOptional()
    @IsString()
    subarea?: string;

    @ApiProperty({
        description: 'Rol del usuario en la organización',
        example: 'Administrador',
        required: false,
    })
    @IsOptional()
    @IsString()
    rol?: string;

    @ApiProperty({
        description: 'Correo electrónico único del usuario',
        example: 'juan.perez@example.com',
        required: false,
    })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({
        description: 'Aplicación asociada al usuario',
        example: 'Sistema de Gestión',
        required: false,
    })
    @IsOptional()
    @IsString()
    aplicacion?: string;

    @ApiProperty({
        description: 'Estado del usuario',
        enum: ['A', 'I'],
        example: 'A',
        required: false,
    })
    @IsEnum(['A', 'I'])
    estado?: string;
}
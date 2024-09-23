import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsString} from "class-validator";
import {Column} from "typeorm";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'Nombre completo del usuario',
        example: 'Juan Perez',
    })
    @IsString()
    nombre?: string;

    @ApiProperty({
        description: 'Nombre de usuario',
        example: 'juanperez',
    })
    @IsString()
    usuario?: string;

    @ApiProperty({
        description: 'Número de identificación del usuario',
        example: '12345678',
    })
    @IsString()
    n_identificacion?: string;
    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'password',
    })
    @Column()
    contraseña: string;
    @ApiProperty({
        description: 'Área a la que pertenece el usuario',
        example: 'Recursos Humanos',
    })
    @IsString()
    area?: string;
    @ApiProperty({
        description: 'Subárea a la que pertenece el usuario',
        example: 'Contratación',
    })
    @IsString()
    subarea?: string;

    @ApiProperty({
        description: 'Rol del usuario en la organización',
        example: 'Administrador',
    })
    @IsString()
    rol?: string;

    @ApiProperty({
        description: 'Correo electrónico único del usuario',
        example: 'juan.perez@example.com',
    })
    @IsEmail()
    email?: string;
    @ApiProperty({
        description: 'Aplicación asociada al usuario',
        example: 'Sistema de Gestión',
    })
    @IsString()
    aplicacion?: string;
    @ApiProperty({
        description: 'Estado del usuario',
        enum: ['A', 'I'],
        example: 'A',
    })
    @IsEnum(['A', 'I'])
    estado?: string;
}
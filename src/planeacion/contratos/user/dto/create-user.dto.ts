import {
    IsEmail, IsEnum,
    IsNotEmpty, IsOptional,
    IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
// create-user-dto
export class CreateUserDto {
    @ApiProperty({
        description: 'Nombre completo del usuario',
        example: 'Juan Perez',
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        description: 'Nombre de usuario',
        example: 'juanperez',
    })
    @IsNotEmpty()
    @IsString()
    usuario: string;

    @ApiProperty({
        description: 'Número de identificación del usuario',
        example: '12345678',
    })
    @IsNotEmpty()
    @IsString()
    n_identificacion: string;

    @ApiProperty({
        description: 'Área a la que pertenece el usuario',
        example: 'Recursos Humanos',
    })
    @IsNotEmpty()
    @IsString()
    area: string;

    @ApiProperty({
        description: 'Subárea a la que pertenece el usuario',
        example: 'Contratación',
    })
    @IsNotEmpty()
    @IsString()
    subarea: string;

    @ApiProperty({
        description: 'Rol del usuario en la organización',
        example: 'Administrador',
    })
    @IsNotEmpty()
    @IsString()
    rol: string;

    @ApiProperty({
        description: 'Correo electrónico único del usuario',
        example: 'juan.perez@example.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Aplicación asociada al usuario',
        example: 'Sistema de Gestión',
    })
    @IsNotEmpty()
    @IsString()
    aplicacion: string;

    @ApiProperty({
        description: 'Estado del usuario',
        enum: ['A', 'I'],
        example: 'A',
    })
    @IsEnum(['A', 'I'])
    estado: string;
}
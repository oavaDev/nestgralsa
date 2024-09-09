import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class AuthLoginDto {
    @ApiProperty({
        description: 'correo del usuario',
        example: 'juan.perez@example.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'password',
    })
    @IsNotEmpty()
    password: string;
}
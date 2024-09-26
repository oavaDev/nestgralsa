import {ApiProperty} from "@nestjs/swagger";
import { IsNotEmpty} from "class-validator";

export class AuthChangePasswordDTO {
    @ApiProperty({
        description: 'numero de identificacion del usuario a cambiar',
        example: '123456789',
    })
    @IsNotEmpty()
    id: string;
    @ApiProperty({
        description: 'numero de identificacion del usuario que la va a cambiar',
        example: '123456789',
    })
    @IsNotEmpty()
    idUser: string;
    @ApiProperty({
        description: 'Contraseña nueva',
        example: 'newPassword',
    })
    @IsNotEmpty()
    password: string;
    @ApiProperty({
        description: 'Id de aplicacion',
        example: '1',
    })
    @IsNotEmpty()
    applicationId: number;
}
import {Body, Controller, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthRegisterDto } from './interfaces/authRegisterDto.entity';
import { AuthLoginDto } from './interfaces/authLoginDto.entity';
import { LocalGuard } from './guards/local.guard';
import {ApiBearerAuth, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "./guards/jwt.guard";
import {AuthChangePasswordDTO} from "./interfaces/authChangePassword.entity";
import {createResponse} from "../../utils/shared/response.util";
@ApiTags('auth')
@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService) {}
    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Body() authLoginDto: AuthLoginDto) {
        return await this.authenticationService.login(authLoginDto);
    }
    @Patch('change-password')
    @ApiOperation({ summary: 'Change password'})
    @ApiOperation({ description: 'Need an Administrator role to change the password of another user, id of the user to change the password, idUser of the user who is changing the password (behind courtains), and the new password'})
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async changePassword(@Body() authChangePasswordDTO: AuthChangePasswordDTO) {
        try {
            const user = await this.authenticationService.changePassword(authChangePasswordDTO);
            return createResponse(user, "Contraseña cambiada con éxito", 200);
        }catch (e){
            return createResponse([], "Error al cambiar la contraseña", 500);
        }
    }
    @Post('register')
    async register(@Body() authRegisterDto: AuthRegisterDto) {
        try {
            const user = await this.authenticationService.register(authRegisterDto);
            return createResponse(user, "Usuario creado con éxito", 201);
        }catch (e){
            return createResponse([], "Error al crear el usuario", 500);
        }
    }
    @Post('validate')
    async validate(@Body() authLoginDto: AuthLoginDto) {
        try {
            const user = await this.authenticationService.validate(authLoginDto);
            return createResponse(user, "Usuario validado con éxito", 200);
        }
        catch (e){
            return createResponse([], "Error al validar el usuario", 500);
        }
    }
}
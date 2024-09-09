import {Body, Controller, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthRegisterDto } from './interfaces/authRegisterDto.entity';
import { AuthLoginDto } from './interfaces/authLoginDto.entity';
import { LocalGuard } from './guards/local.guard';
import {ApiBearerAuth, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "./guards/jwt.guard";
import {AuthChangePasswordDTO} from "./interfaces/authChangePassword.entity";
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
        return await this.authenticationService.changePassword(authChangePasswordDTO);
    }
    @Post('register')
    async register(@Body() authRegisterDto: AuthRegisterDto) {
        return await this.authenticationService.register(authRegisterDto);
    }
    @Post('validate')
    async validate(@Body() authLoginDto: AuthLoginDto) {
        return await this.authenticationService.validate(authLoginDto);
    }
}
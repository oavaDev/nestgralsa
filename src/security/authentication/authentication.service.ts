import { Injectable } from '@nestjs/common';
import {
    generateHashedPassword,
    verifyHashAndPassword,
} from '../bcrypt/bcrypt'
import { AuthLoginDto } from './interfaces/authLoginDto.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterDto } from './interfaces/authRegisterDto.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../../shared/user/entities/user.entity";
import {UserService} from "../../shared/user/user.service";
import {AuthChangePasswordDTO} from "./interfaces/authChangePassword.entity";

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(userToLogin: AuthLoginDto) {
        const user: UserEntity = await this.userService.findByEmail(userToLogin.email)
        if (!user) {
            return null;
        }
        const passwordsMatch = await verifyHashAndPassword(
            userToLogin.password,
            user.password,
        );
        if (passwordsMatch) {
            const token = this.jwtService.sign({
                email: user.email,
                username: user.usuario,
            });
            return {
                user,
                access_token: token,
            };
        } else {
            return null;
        }
    }
    async changePassword(authChangePasswordDTO : AuthChangePasswordDTO) {
        const user = await this.userService.findByNIde(authChangePasswordDTO.id);
        if (!user) {
            throw new Error('User not found');
        }
        const userChangingPassword = await this.userService.findByNIde(authChangePasswordDTO.idUser);
        let roles = userChangingPassword.roles;
        for (let role of roles) {
            if (role.role.aplicacion.id === authChangePasswordDTO.applicationId && role.role.descripcion === 'ADMINISTRADOR') {
                console.log('ADMINISTRADOR role found');
                break;
            } else {
                throw new Error('Unauthorized');
            }
        }
        /* if (userChangingPassword.roles !== 'Administrador') {
              throw new Error('Unauthorized');
          }*/
        user.password = await generateHashedPassword(authChangePasswordDTO.password);
        return await this.userService.changePassword(authChangePasswordDTO.id, user.password);
    }
    async register(user: AuthRegisterDto) {
        const existingUser = await this.userService.findByEmail(user.email);
        if (existingUser) {
            return 'User already exists';
        }
        console.log(user)
        user.password = await generateHashedPassword(user.password);
        console.log(user.password)
        return await this.userService.create(user);
    }

    async validate(userToValidate: AuthLoginDto) {
        const user = await this.userService.findByEmail(userToValidate.email)
        if (!user) {
            return null;
        }
        const passwordsMatch = await verifyHashAndPassword(
            userToValidate.password,
            user.password,
        );
        if (passwordsMatch) {
            return user;
        } else {
            return null;
        }
    }
}
import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import * as process from "process";
import {UserModule} from "../../shared/user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../shared/user/entities/user.entity";
import {UserService} from "../../shared/user/user.service";

@Module({
    imports: [
        PassportModule,
        UserModule,
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.registerAsync({
            extraProviders: [],
            global: false,
            imports: undefined,
            inject: [],
            useClass: undefined,
            useExisting: undefined,
            useFactory: async () => ({
                secret: process.env['JWT_SECRET'],
                signOptions: { expiresIn: process.env['EXPIRATION_TIME'] },
            })
        }),
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, LocalStrategy, JwtStrategy,UserService],
})
export class AuthenticationModule {}
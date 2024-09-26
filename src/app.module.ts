import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './shared/user/user.module';
import {UserEntity} from "./shared/user/entities/user.entity";
import {AuthenticationModule} from "./security/authentication/authentication.module";
import { UserRoleModule } from './shared/user-role/user-role.module';
import { RoleModule } from './shared/role/role.module';
import { AreaModule } from './shared/area/area.module';
import { SubareaModule } from './shared/subarea/subarea.module';
import { AplicationModule } from './shared/aplication/aplication.module';
import {AplicationEntity} from "./shared/aplication/entities/aplication.entity";
import {SubareaEntity} from "./shared/subarea/entities/subarea.entity";
import {AreaEntity} from "./shared/area/entities/area.entity";
import {RoleEntity} from "./shared/role/entities/role.entity";
import {UserRoleEntity} from "./shared/user-role/entities/user-role.entity";

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV ? 'env/.env.development': 'env/.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port : parseInt(process.env.POSTGRES_PORT),
      username : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DB,
      entities: [UserEntity, UserRoleEntity, RoleEntity, AreaEntity, SubareaEntity, AplicationEntity],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthenticationModule,
    UserRoleModule,
    RoleModule,
    AreaModule,
    SubareaModule,
    AplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

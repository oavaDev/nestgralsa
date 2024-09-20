import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './planeacion/contratos/user/user.module';
import {UserEntity} from "./planeacion/contratos/user/entities/user.entity";
import {AuthenticationModule} from "./security/authentication/authentication.module";
import { MenuModule } from './shared/menu/menu.module';
import {MenuEntity} from "./shared/menu/entities/menu.entity";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port : parseInt(process.env.POSTGRES_PORT),
      username : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DB,
      entities: [UserEntity,MenuEntity],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthenticationModule,
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

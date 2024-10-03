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
import { CurencyModule } from './planning/contracts/curency/curency.module';
import {CurrencyEntity} from "./planning/contracts/curency/entities/currency.entity";
import {DocumentTypeEntity} from "./planning/contracts/document_type/entities/document-type.entity";
import {DocumentTypeModule} from "./planning/contracts/document_type/document-type.module";
import { JobTitleModule } from './shared/job-title/job-title.module';
import {JobTitleEntity} from "./shared/job-title/entities/job-title.entity";
import { ManagementLevelModule } from './planning/contracts/management-level/management-level.module';
import { CriticalityLevelModule } from './planning/contracts/criticality-level/criticality-level.module';
import {ManagementLevelEntity} from "./planning/contracts/management-level/entities/management-level.entity";
import {CriticallityLevelEntity} from "./planning/contracts/criticality-level/entities/criticallity-level.entity";
import { ContractModule } from './planning/contracts/contract/contract.module';
import {ContractEntity} from "./planning/contracts/contract/entities/contract.entity";
import { ContractFileModule } from './planning/contracts/contract-file/contract-file.module';
import {ContractFileEntity} from "./planning/contracts/contract-file/entities/contract-file.entity";

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
      entities: [
        UserEntity,
        UserRoleEntity,
        RoleEntity,
        AreaEntity,
        SubareaEntity,
        AplicationEntity,
        CurrencyEntity,
        DocumentTypeEntity,
        JobTitleEntity,
        ManagementLevelEntity,
        CriticallityLevelEntity,
        ContractEntity,
        ContractFileEntity
      ],
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
    CurencyModule,
    DocumentTypeModule,
    JobTitleModule,
    ManagementLevelModule,
    CriticalityLevelModule,
    ContractModule,
    ContractFileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

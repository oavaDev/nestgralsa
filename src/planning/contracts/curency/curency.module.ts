import { Module } from '@nestjs/common';
import { CurencyService } from './curency.service';
import { CurencyController } from './curency.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CurrencyEntity} from "./entities/currency.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CurrencyEntity]),
  ],
  controllers: [CurencyController],
  providers: [CurencyService],
})
export class CurencyModule {}

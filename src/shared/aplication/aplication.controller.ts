import {Controller, UseGuards} from '@nestjs/common';
import { AplicationService } from './aplication.service';
import {ApiBearerAuth} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../security/authentication/guards/jwt.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('aplication')
export class AplicationController {
  constructor(private readonly aplicationService: AplicationService) {

  }
}

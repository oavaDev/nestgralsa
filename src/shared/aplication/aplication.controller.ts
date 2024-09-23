import { Controller } from '@nestjs/common';
import { AplicationService } from './aplication.service';

@Controller('aplication')
export class AplicationController {
  constructor(private readonly aplicationService: AplicationService) {

  }
}

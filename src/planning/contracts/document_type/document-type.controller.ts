import {Controller, Get, Inject} from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import {ApiProperty, ApiTags} from "@nestjs/swagger";

@Controller('document-type')
@ApiTags('document-type')
export class DocumentTypeController {
  constructor(
    private readonly documentTypeService: DocumentTypeService
  ) {
  }
  @Get()
  async getCurrency() {
    return this.documentTypeService.findAll();
  }
}

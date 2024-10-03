import {Controller, Get, Inject} from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";

@Controller('document-type')
@ApiTags('document-type')
export class DocumentTypeController {
  constructor(
    private readonly documentTypeService: DocumentTypeService
  ) {
  }
  @Get()
  async getCurrency() {
    try {
      return createResponse(await this.documentTypeService.findAll(), "Tipos de documentos obtenidos con éxito", 200);
    }catch (e){
        return createResponse([], "Error al obtener los tipos de documentos", 500);
    }
  }
}

import {Controller, Get, Inject, UseGuards} from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import {ApiBearerAuth, ApiProperty, ApiTags} from "@nestjs/swagger";
import {createResponse} from "../../../utils/shared/response.util";
import {JwtAuthGuard} from "../../../security/authentication/guards/jwt.guard";

@ApiTags('document-type')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('document-type')
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

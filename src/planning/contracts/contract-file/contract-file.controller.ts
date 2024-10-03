import {
    Body,
    Controller, Get, HttpStatus, Param, ParseFilePipeBuilder,
    Post, Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ContractFileService } from './contract-file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiBody, ApiConsumes, ApiProperty, ApiTags} from "@nestjs/swagger";
import {CreateContractFileDto} from "./dto/create-contract-file.dto";
import {ContractFileEntity} from "./entities/contract-file.entity";
import {ContractFileWBufferDto} from "./dto/contract-file-w-buffer.dto";
import {Response} from 'express';
import {createResponse} from "../../../utils/shared/response.util";
import {ResponseEntity} from "../../../shared/entity/response.entity";
@Controller('contract-file')
@ApiTags('contract-file')
export class ContractFileController {
  constructor(private readonly contractFileService: ContractFileService) {}
  @Get(':id/files')
  async getFilesForContract(@Param('id') contractId: number): Promise<ResponseEntity> {
      try {
          return createResponse(await this.contractFileService.getFilesByContract(contractId), "Archivos obtenidos con éxito", 200);
      }catch (e){
          return createResponse([], "Error al obtener los archivos", 500);
      }
  }
  @Get('download/file/:fileId')
  async downloadFile(
    @Param('fileId') fileId: number,
    @Res() res: Response,  // Use Express Response object for streaming
  ): Promise<any> {
    return this.contractFileService.downloadFile(fileId, res);
  }
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        contract_id: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Body() data: CreateContractFileDto,
             @UploadedFile(
                new ParseFilePipeBuilder()
                    .addFileTypeValidator({
                      fileType: 'pdf',
                    }).addMaxSizeValidator({
                        maxSize: 1024 * 1024 * 20,
                   })
                    .build({
                      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
                    }),
            ) file: Express.Multer.File){
      try {
          await this.contractFileService.uploadFile(data, file);
          return createResponse(data, "Contrato guardado con éxito", 201);
      }catch (error){
          return createResponse([], "Error al subir el archivo", 500);
      }
  }
}

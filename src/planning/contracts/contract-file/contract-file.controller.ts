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
@Controller('contract-file')
@ApiTags('contract-file')
export class ContractFileController {
  constructor(private readonly contractFileService: ContractFileService) {}
  @Get(':id/files')
  async getFilesForContract(@Param('id') contractId: number): Promise<ContractFileWBufferDto[]> {
    return await this.contractFileService.getFilesByContract(contractId);
  }
  @Get('download/file/:fileId')
  async downloadFile(
    @Param('fileId') fileId: number,
    @Res() res: Response,  // Use Express Response object for streaming
  ): Promise<any> {
    return this.contractFileService.downloadFile(fileId, res);
    try {
        const data = await this.contractFileService.downloadFile(fileId, res);
        return createResponse(data, "Archivo descargado con éxito", 200);
    }catch (error){
        return createResponse([], "Error al descargar el archivo", 500);
    }
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

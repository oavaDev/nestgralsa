import {
    Body,
    Controller, Get, HttpStatus, Param, ParseFilePipeBuilder,
    Post, Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ContractFileService } from './contract-file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiBody, ApiConsumes, ApiTags} from "@nestjs/swagger";
import {CreateContractFileDto} from "./dto/create-contract-file.dto";
import {ContractFileEntity} from "./entities/contract-file.entity";
import {ContractFileWBufferDto} from "./dto/contract-file-w-buffer.dto";
import {Response} from 'express';
@Controller('contract-file')
@ApiTags('contract-file')
export class ContractFileController {
  constructor(private readonly contractFileService: ContractFileService) {}
  @Get(':id/files')
  async getFilesForContract(@Param('id') contractId: number): Promise<ContractFileWBufferDto[]> {
    return await this.contractFileService.getFilesByContract(contractId);
  }
  @Get('files/:fileId')
  async downloadFile(
    @Param('fileId') fileId: number,
    @Res() res: Response,  // Use Express Response object for streaming
  ): Promise<void> {
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
    await this.contractFileService.uploadFile(data, file);
  }
}

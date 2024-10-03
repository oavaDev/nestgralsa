import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateContractFileDto {
    @ApiProperty({ type: 'number', format: 'number', required: true })
    @IsNotEmpty()
    contract_id: number
    @ApiProperty({ type: 'string', format: 'binary', required: true })
    file: Express.Multer.File
}

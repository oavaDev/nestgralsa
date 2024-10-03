import {HttpStatus} from "@nestjs/common";

export class ResponseEntity {
    status: HttpStatus;
    message: string;
    data: any;
}
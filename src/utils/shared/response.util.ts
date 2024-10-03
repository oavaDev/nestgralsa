import {ResponseEntity} from "../../shared/entity/response.entity";

export function createResponse<T>(data: T, message: string, status: number): {
    data: T;
    message: string;
    status: number
} {
    return {
        message,
        data,
        status,
    };
}
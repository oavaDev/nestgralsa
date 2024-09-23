import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class CreateUserRoleDto {
    @ApiProperty({ example: 1 })
    @Column()
    user_id: number;
    @ApiProperty({ example: 1 })
    @Column()
    rol_id: number;
    @ApiProperty({ example: 1 })
    @Column()
    aplicacion_id: number;
    @ApiProperty({ example: 1 })
    @Column()
    area_id: number;
    @Column()
    @ApiProperty({ example: 2 })
    subarea_id: number;
}

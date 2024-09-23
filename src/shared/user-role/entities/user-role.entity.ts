import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {UserEntity} from "../../user/entities/user.entity";
import {AplicationEntity} from "../../aplication/entities/aplication.entity";
import {RoleEntity} from "../../role/entities/role.entity";
import {AreaEntity} from "../../area/entities/area.entity";
import {SubareaEntity} from "../../subarea/entities/subarea.entity";


@Entity('user_role_entity')
export class UserRoleEntity {
    @ApiProperty({
        description: 'Identificador único de la relación usuario-rol',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Identificador del usuario',
        example: 1,
    })
    @ManyToOne(() => UserEntity, user => user.roles,{
        onDelete: 'SET NULL'
    })
    //Relación directa con usuario
    user: UserEntity;

    @ApiProperty({
        description: 'Identificador del rol',
        example: 1,
    })
    @ManyToOne(() => RoleEntity, (role) => role.id)
    role: RoleEntity;

    @ApiProperty({
        description: 'Identificador de la aplicación',
        example: 1,
    })
    @ManyToOne(() => AplicationEntity, (aplication) => aplication.id)
    aplication: AplicationEntity;

    @ApiProperty({
        description: 'Identificador del área',
        example: 1,
    })
    @ManyToOne(() => AreaEntity, (area) => area.id)
    area: AreaEntity;

    @ApiProperty({
        description: 'Identificador de la subárea',
        example: 1,
    })
    @ManyToOne(() => SubareaEntity, (subarea) => subarea.id)
    subarea: SubareaEntity;
}


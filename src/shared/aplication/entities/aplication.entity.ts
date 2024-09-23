import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from '../../role/entities/role.entity';
import { UserRoleEntity } from '../../user-role/entities/user-role.entity';

@Entity('aplication_entity')
export class AplicationEntity {
    @ApiProperty({
        description: 'Identificador único de la aplicación',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Nombre de la aplicación',
        example: 'Sistema de Gestión',
    })
    @Column()
    nombre: string;

    @ApiProperty({
        description: 'Descripción de la aplicación',
        example: 'Aplicación para la gestión de procesos administrativos',
    })
    @Column()
    descripcion: string;
}

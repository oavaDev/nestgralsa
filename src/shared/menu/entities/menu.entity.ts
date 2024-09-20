import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class MenuEntity {
    @ApiProperty({
        description: 'Identificador único del menu',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({
        description: 'Nombre del rol',
        example: 'Admin',
    })
    @Column()
    nombre: string;
    @ApiProperty({
        description: 'Descripción del rol',
        example: 'Administrador',
    })
    @Column()
    descripcion: string;
    @ApiProperty({
        description: 'Aplicación del rol',
        example: 'Sistema de gestion',
    })
    @Column()
    aplicacion : string
    @ApiProperty({
        description: 'Menú del rol en JSON',
        example: '{"menu": "menu"}',
    })
    @Column({type: 'json', nullable: true})
    menu: string;
    @ApiProperty({
        description: 'Estado del rol',
        example: true,
    })
    @Column()
    estado: boolean;
    @ApiProperty({
        description: 'Fecha de creación del rol',
        example: '2021-10-10',
    })
    @Column()
    fecha_creacion: string;
}

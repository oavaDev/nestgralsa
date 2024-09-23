import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
import {UserRoleEntity} from "../../user-role/entities/user-role.entity";
import {JoinColumn} from "typeorm/browser";

@Entity()
export class UserEntity {
    @ApiProperty({
        description: 'Identificador único del usuario',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({
        description: 'Nombre completo del usuario',
        example: 'Juan Perez',
    })
    @Column()
    @IsString()
    nombre: string;
    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'password',
    })
    @Column()
    @IsNotEmpty()
    @IsString()
    password: string;
    @Column()
    usuario: string;
    @ApiProperty({
        description: 'Número de identificación del usuario',
        example: '12345678',
    })
    @Column()
    n_identificacion: string;
    @ApiProperty({
        description: 'Correo electrónico único del usuario',
        example: 'example@mail.com',
    })
    @Column({ unique: true })
    email: string;
    @ApiProperty({
        description: 'Estado del usuario',
        example: 'A',
    })
    @Column({enum: ['A', 'I']})
    estado: string;
    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_creacion: Date;
    @ApiProperty({
        description: 'Menu del usuario',
    })
    @OneToMany(() => UserRoleEntity, userRole => userRole.user)
    roles: UserRoleEntity[];
}
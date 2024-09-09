import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
import {Exclude} from "class-transformer";

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
        description: 'Área a la que pertenece el usuario',
        example: 'Recursos Humanos',
    })
    @Column()
    area: string;
    @ApiProperty({
        description: 'Subárea a la que pertenece el usuario',
        example: 'Contratación',
    })
    @Column()
    subarea: string;
    @ApiProperty({
        description: 'Rol del usuario en la organización',
        example: 'Administrador',
    })
    @Column()
    rol: string;
    @ApiProperty({
        description: 'Correo electrónico único del usuario',
        example: 'example@mail.com',
    })
    @Column({ unique: true })
    email: string;
    @ApiProperty({
        description: 'Aplicación a la que pertenece el usuario',
        example: 'Contratos',
    })
    @Column()
    aplicacion: string;
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
}
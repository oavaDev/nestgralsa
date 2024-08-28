import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class UserEntity {
    @ApiProperty({
        description: 'Identificador único del usuario',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    usuario: string;

    @Column()
    n_identificacion: string;

    @Column()
    area: string;

    @Column()
    subarea: string;

    @Column()
    rol: string;

    @Column({ unique: true })
    email: string;

    @Column()
    aplicacion: string;

    @Column({enum: ['A', 'I']})
    estado: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_creacion: Date;
}
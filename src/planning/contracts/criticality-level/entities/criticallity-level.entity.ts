import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('criticallity_level_entity')
export class CriticallityLevelEntity {
    @ApiProperty({
        description: 'Identificador único del nivel de criticidad',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción del nivel de criticidad',
        example: 'Alto',
    })
    @Column()
    description: string;
}

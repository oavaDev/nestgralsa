import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('management_level_entity')
export class ManagementLevelEntity {
    @ApiProperty({
        description: 'Identificador único del nivel de gestión',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción del nivel de gestión',
        example: 'Alto',
    })
    @Column()
    description: string;
}

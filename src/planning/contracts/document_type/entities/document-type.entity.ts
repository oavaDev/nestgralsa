import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('document_type_entity')
export class DocumentTypeEntity {
    @ApiProperty({
        description: 'Identificador único del tipo de documento',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción del tipo de documento',
        example: 'Administración',
    })
    @Column()
    description: string;
}

import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('currency_entity')
export class CurrencyEntity {
    @ApiProperty({
        description: 'Identificador único del área',
        example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Descripción de la moneda',
        example: 'Administración',
    })
    @Column()
    description: string;
}

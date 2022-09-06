import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Endpoint {
  @ApiProperty({
    description: 'Unique id',
    type: Number,
    example: 1
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Endpoint name',
    type: String,
    example: '/post/:id'
  })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({
    description: 'User creation date',
    type: Date,
    example: new Date()
  })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at'
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User updating date',
    type: Date,
    example: new Date()
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at'
  })
  updatedAt: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Todo {
  @ApiProperty({
    description: 'Unique id',
    type: Number,
    example: 1
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Todo title',
    type: String,
    example: 'Buy milk'
  })
  @Column({
    nullable: false
  })
  title: string;

  @ApiProperty({
    description: 'Todo complete status',
    type: Boolean,
    example: false
  })
  @Column('boolean', { default: false })
  completed: boolean;

  @ApiProperty({
    description: 'Todo creation date',
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
    description: 'Todo updating date',
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

  @ManyToOne(() => User, (user) => user.todos) user: User;
}

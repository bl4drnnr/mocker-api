import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Post } from './post.entity';
import { Todo } from './todo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({
    description: 'Unique id',
    type: Number,
    example: 1
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'User first name',
    type: String,
    example: 'John'
  })
  @Column({
    nullable: false,
    name: 'first_name'
  })
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    type: String,
    example: 'Doe'
  })
  @Column({
    nullable: false,
    name: 'last_name'
  })
  lastName: string;

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

  @OneToMany(() => Post, (post) => post.user) posts: Post[];
  @OneToMany(() => Todo, (todo) => todo.user) todos: Todo[];
}

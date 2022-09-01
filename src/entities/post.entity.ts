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
export class Post {
  @ApiProperty({
    description: 'Unique id',
    type: Number,
    example: 1
  })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    description: 'Post title',
    type: String,
    example: 'JS RULEZ'
  })
  @Column({
    nullable: false
  })
  title: string;

  @ApiProperty({
    description: 'Post content',
    type: String,
    example: 'Blah... Blah... Blah...'
  })
  @Column({
    nullable: false,
    length: 512
  })
  content: string;

  @ApiProperty({
    description: 'Post preview',
    type: String,
    example: 'https://previewlink.org/100/150'
  })
  @Column({
    nullable: false
  })
  preview: string;

  @ApiProperty({
    description: 'Post creation date',
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
    description: 'Post updating date',
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

  @ManyToOne(() => User, (user) => user.posts) user: User;
}

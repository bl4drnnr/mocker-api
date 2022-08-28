import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false
  })
  title: string;

  @Column({
    nullable: false,
    length: 512
  })
  content: string;

  @Column({
    nullable: false
  })
  preview: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at'
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts) user: User;
}

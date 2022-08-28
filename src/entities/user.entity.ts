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

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
    name: 'first_name'
  })
  firstName: string;

  @Column({
    nullable: false,
    name: 'last_name'
  })
  lastName: string;

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

  @OneToMany(() => Post, (post) => post.user) posts: Post[];
  @OneToMany(() => Todo, (todo) => todo.user) todos: Todo[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';
import { Todo } from './todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  firstName: string;

  @Column({
    nullable: false
  })
  lastName: string;

  @OneToMany(() => Post, (post) => post.user) posts: Post[];
  @OneToMany(() => Todo, (todo) => todo.user) todos: Todo[];
}

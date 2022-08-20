import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  title: string;

  @Column('boolean', { default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.todos) user: User[];
}

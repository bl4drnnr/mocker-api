import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false
  })
  title: string;

  @Column('boolean', { default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.todos) user: User[];
}

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
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false
  })
  title: string;

  @Column('boolean', { default: false })
  completed: boolean;

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

  @ManyToOne(() => User, (user) => user.todos) user: User[];
}

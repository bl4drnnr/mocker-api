import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
    nullable: false
  })
  content: string;

  @Column({
    nullable: false
  })
  preview: string;

  @ManyToOne(() => User, (user) => user.posts) user: User;
}

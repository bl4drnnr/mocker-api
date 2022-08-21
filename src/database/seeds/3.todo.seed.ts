import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { Todo } from '../../entities/todo.entity';

export default class CreateTodos implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Todo)
      .values([
        { title: 'Buy breed', completed: false, user: () => '1' },
        { title: 'Buy milk', completed: true, user: () => '1' },
        { title: 'End project', completed: false, user: () => '1' },
        { title: 'Learn new framework', completed: true, user: () => '2' },
        { title: 'Pass exams', completed: false, user: () => '2' },
        { title: 'Buy food for cat', completed: true, user: () => '4' },
        { title: 'Play guitar', completed: false, user: () => '4' },
        { title: 'Pay rent', completed: true, user: () => '5' },
        { title: 'Pay bills', completed: true, user: () => '5' },
        { title: 'Look for new job', completed: true, user: () => '7' },
        { title: 'Buy crypto', completed: true, user: () => '7' },
        { title: 'Sell crypto', completed: true, user: () => '7' },
        { title: 'Go for a walk', completed: true, user: () => '7' }
      ])
      .execute();
  }
}

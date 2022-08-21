import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { User } from '../../entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { firstName: 'Timber', lastName: 'Saw' },
        { firstName: 'Phantom', lastName: 'Lancer' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jan', lastName: 'Kowalski' },
        { firstName: 'Will', lastName: 'Smith' },
        { firstName: 'Michael', lastName: 'Jordan' },
        { firstName: 'Tor', lastName: 'Ragnarok' },
        { firstName: 'Victor', lastName: 'Blood' },
        { firstName: 'John', lastName: 'Frusciante' },
        { firstName: 'Valentin', lastName: 'Later' }
      ])
      .execute();
  }
}

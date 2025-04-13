import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressBookEntry } from './address-book.entity';

@Injectable()
export class AddressBookService {
  constructor(
    @InjectRepository(AddressBookEntry)
    private repo: Repository<AddressBookEntry>,
  ) {}

  create(entry: Partial<AddressBookEntry>) {
    const newEntry = this.repo.create(entry);
    return this.repo.save(newEntry);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(idOrEmail: string | number) {
    return isNaN(+idOrEmail)
      ? this.repo.findOneBy({ email: idOrEmail.toString() })
      : this.repo.findOneBy({ id: +idOrEmail });
  }

  update(id: number, data: Partial<AddressBookEntry>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

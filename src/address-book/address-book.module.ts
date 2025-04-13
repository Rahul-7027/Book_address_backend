import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressBookEntry } from './address-book.entity';
import { AddressBookService } from './address-book.service';
import { AddressBookController } from './address-book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AddressBookEntry])],
  providers: [AddressBookService],
  controllers: [AddressBookController],
})
export class AddressBookModule {}

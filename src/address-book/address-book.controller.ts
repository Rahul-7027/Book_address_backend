import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AddressBookService } from './address-book.service';
import { AddressBookEntry } from './address-book.entity';

@Controller('address-book')
export class AddressBookController {
  constructor(private readonly service: AddressBookService) {}

  @Post()
  create(@Body() data: Partial<AddressBookEntry>) {
    return this.service.create(data);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':idOrEmail')
  getOne(@Param('idOrEmail') idOrEmail: string) {
    return this.service.findOne(idOrEmail);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<AddressBookEntry>) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}

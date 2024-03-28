import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { starkBook } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(starkBook)
    private bookRepository: Repository<starkBook>,
  ) { }

  async findAll() {
    const books = await this.bookRepository.find();
    return books;
  }

  async findById(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException(`Este libro no existe`);
    }

    return book;
  }

  async create(createBookDto: CreateBookDto) {
    const newBook = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(newBook);
    return newBook;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const existingBook = await this.findById(id);
    const updatedBook = { ...existingBook, ...updateBookDto };
    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }

  async remove(id: number) {
    const existingBook = await this.findById(id);
    await this.bookRepository.remove(existingBook);
    return existingBook;
  }
}

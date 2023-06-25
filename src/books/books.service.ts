import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) { }
  create(createBookDto: CreateBookDto) {
    return this.prismaService.book.create({
      data: createBookDto
    });
  }

  findAll() {
    return this.prismaService.book.findMany({ where: {} });
  }

  findOne(id: string) {
    return this.prismaService.book.findUnique({ where: { id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

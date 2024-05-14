import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async create(user: CreateUserDto) {
    return await this.prismaService.user.create({ data: user });
  }
}

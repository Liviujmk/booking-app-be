import { Injectable } from '@nestjs/common';
import { Admin } from '@prisma/client'

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  
  async findOne(email: string): Promise<Admin> {
    return await this.prisma.admin.findUnique({where: {email}})
  }
}

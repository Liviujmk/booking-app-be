import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) { }

  async signIn({ email, password }: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    if ((user?.password !== password)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(body: SignUpDto) {
    try {
      return await this.prisma.admin.create({
        data: body,
        select: {
          first_name: true,
          last_name: true,
          email: true,
        }
      })

    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ConflictException("User with this email already exists.")
        }
      }
      throw error;
    }
  }
}
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { FirebaseAuthGuard } from 'src/auth/firebase.strategy';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(FirebaseAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return this.usersService.getProfile(req['user']);
  }
}

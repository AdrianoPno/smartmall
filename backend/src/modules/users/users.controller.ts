import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { FirebaseAuthGuard } from 'src/auth/firebase.strategy';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(FirebaseAuthGuard)
  getProfile(@Req() req: any) {
    return {
      message: 'Perfil autenticado!',
      user: req.user,
    };
  }
}

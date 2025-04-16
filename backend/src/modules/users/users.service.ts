import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getProfile(user: any) {
    return {
      message: 'Perfil do usuário autenticado',
      uid: user.uid,
      email: user.email,
      name: user.name ?? null,
    };
  }
}

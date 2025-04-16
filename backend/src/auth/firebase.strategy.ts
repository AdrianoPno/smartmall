import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader?.startsWith('Bearer ')) {
      console.warn('❌ Cabeçalho Authorization ausente ou malformado');
      return false;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = await this.authService.verifyToken(token);
      request['user'] = decoded;
      console.log('✅ Usuário autenticado:', decoded.email || decoded.uid);
      return true;
    } catch (err: any) {
      console.warn('❌ Token inválido:', err?.message || err);
      return false;
    }
  }
}

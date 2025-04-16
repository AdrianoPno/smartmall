import { Controller, Post, Body } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Controller('auth')
export class AuthController {
  @Post('custom-token')
  async createCustomToken(@Body() body: { email: string }) {
    console.log('📥 Requisição recebida com email:', body.email);

    try {
      const token = await admin.auth().createCustomToken(body.email, { email: body.email });
      return { token };
    } catch (err) {
      console.error('❌ Erro ao gerar token:', err);
      return { error: (err as Error).message };
    }
  }
}

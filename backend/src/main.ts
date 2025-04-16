import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { readFileSync } from 'fs';

async function bootstrap() {
  // 🔐 Protege contra múltiplas inicializações
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(readFileSync('./firebase/serviceAccountKey.json', 'utf-8'));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log('🔥 Firebase Admin inicializado');
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(3000);
}
bootstrap();

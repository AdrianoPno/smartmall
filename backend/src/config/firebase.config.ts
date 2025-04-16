import * as path from 'path';
import * as fs from 'fs';
import * as admin from 'firebase-admin';

export const initializeFirebase = () => {
  const rawEnvPath = process.env.FIREBASE_CREDENTIALS_PATH;

  console.log('🔎 process.cwd():', process.cwd());
  console.log('🔎 __dirname:', __dirname);
  console.log('🔎 ENV FIREBASE_CREDENTIALS_PATH:', rawEnvPath);

  const fullPath = path.resolve(__dirname, '..', '..', rawEnvPath || '');
  console.log('🔎 fullPath resolvido:', fullPath);
  console.log('📄 Arquivo existe?', fs.existsSync(fullPath));

  if (!rawEnvPath) {
    console.warn('⚠️ FIREBASE_CREDENTIALS_PATH não definida no .env');
    return;
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Arquivo não encontrado em: ${fullPath}`);
  }


  console.log('🔥 Firebase inicializado com sucesso');
};

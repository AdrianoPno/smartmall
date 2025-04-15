import * as admin from 'firebase-admin';
import { readFileSync } from 'fs';

export const initializeFirebase = () => {
  const serviceAccount = JSON.parse(readFileSync(process.env.FIREBASE_CREDENTIALS_PATH!, 'utf8'));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

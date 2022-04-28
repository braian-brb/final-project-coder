import dotenv from 'dotenv';

dotenv.config();

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({
  credentials: applicationDefault(),
});

const db = getFirestore();

export default db;

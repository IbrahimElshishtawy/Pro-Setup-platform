import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { ENV } from '../config/env';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let isFirebaseConfigured = false;

// Check if actual valid Firebase credentials are provided
if (ENV.FIREBASE.API_KEY && ENV.FIREBASE.PROJECT_ID && ENV.FIREBASE.API_KEY !== '') {
  try {
    if (!getApps().length) {
      app = initializeApp({
        apiKey: ENV.FIREBASE.API_KEY,
        authDomain: ENV.FIREBASE.AUTH_DOMAIN || `${ENV.FIREBASE.PROJECT_ID}.firebaseapp.com`,
        projectId: ENV.FIREBASE.PROJECT_ID,
        storageBucket: ENV.FIREBASE.STORAGE_BUCKET || `${ENV.FIREBASE.PROJECT_ID}.appspot.com`,
        messagingSenderId: ENV.FIREBASE.MESSAGING_SENDER_ID,
        appId: ENV.FIREBASE.APP_ID,
        measurementId: ENV.FIREBASE.MEASUREMENT_ID,
      });
    } else {
      app = getApps()[0];
    }
    db = getFirestore(app);
    isFirebaseConfigured = true;
    console.log('[PRO SETUP] Firebase Cloud Firestore initialized successfully.');
  } catch (err) {
    console.warn('[PRO SETUP] Firebase initialization note: running in local offline storage mode.', err);
  }
} else {
  console.info('[PRO SETUP] Firebase credentials not detected yet. Operating in high-reliability client-side storage mode. (Set VITE_FIREBASE_API_KEY in .env to connect to live Firestore)');
}

export { app, db, isFirebaseConfigured };

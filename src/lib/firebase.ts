export interface ConsultationRequest {
  name: string;
  phone: string;
  service: string;
  city: string;
  notes: string;
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY?.trim() || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.trim() || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim() || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET?.trim() || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID?.trim() || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID?.trim() || '',
};

/**
 * Submits a customer consultation request.
 * Dynamically loads Firebase Firestore ONLY when env vars are configured
 * and the user actually submits the form — keeping initial page load zero-bloat.
 */
export async function submitConsultation(
  payload: ConsultationRequest,
): Promise<{ ok: boolean; mode: 'firestore' | 'local'; reference: string }> {
  const reference = `KP-${Math.floor(10000 + Math.random() * 90000)}`;

  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    try {
      const [{ initializeApp, getApps }, { addDoc, collection, getFirestore, serverTimestamp }] =
        await Promise.all([import('firebase/app'), import('firebase/firestore')]);

      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const db = getFirestore(app);

      await addDoc(collection(db, 'consultations'), {
        ...payload,
        reference,
        status: 'new',
        createdAt: serverTimestamp(),
      });
      return { ok: true, mode: 'firestore', reference };
    } catch {
      // Fall back gracefully so the customer is never blocked
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true, mode: 'local', reference };
}

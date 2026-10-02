import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './config';

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  source?: string;
  createdAt?: unknown;
}

export interface QuotePayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
  createdAt?: unknown;
}

export interface SubscriberPayload {
  email: string;
  subscribedAt?: unknown;
}

/**
 * Saves a general contact inquiry to Firebase Cloud Firestore.
 * Automatically saves a fallback copy to browser localStorage.
 */
export async function submitInquiry(data: InquiryPayload): Promise<{ success: boolean; id: string; mode: 'firebase' | 'local' }> {
  const timestamp = new Date().toISOString();
  
  // 1. Always back up locally in case of network disruptions
  try {
    const existing = JSON.parse(localStorage.getItem('prosetup_inquiries') || '[]');
    existing.push({ ...data, timestamp });
    localStorage.setItem('prosetup_inquiries', JSON.stringify(existing));
  } catch (e) {
    console.error('Local backup failed', e);
  }

  // 2. If Firebase is initialized, push to Firestore
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'inquiries'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'new',
      });
      return { success: true, id: docRef.id, mode: 'firebase' };
    } catch (err) {
      console.error('[PRO SETUP Firestore Error] Failed to write inquiry to cloud:', err);
      return { success: true, id: `local_${Date.now()}`, mode: 'local' };
    }
  }

  // Simulate network delay for realistic enterprise UX
  await new Promise(r => setTimeout(r, 600));
  return { success: true, id: `demo_${Date.now()}`, mode: 'local' };
}

/**
 * Saves an interactive quote request to Firebase Cloud Firestore.
 */
export async function submitQuote(data: QuotePayload): Promise<{ success: boolean; id: string; mode: 'firebase' | 'local' }> {
  const timestamp = new Date().toISOString();
  
  try {
    const existing = JSON.parse(localStorage.getItem('prosetup_quotes') || '[]');
    existing.push({ ...data, timestamp });
    localStorage.setItem('prosetup_quotes', JSON.stringify(existing));
  } catch (e) {
    console.error('Local backup failed', e);
  }

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'quotes'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'pending_review',
      });
      return { success: true, id: docRef.id, mode: 'firebase' };
    } catch (err) {
      console.error('[PRO SETUP Firestore Error] Failed to write quote to cloud:', err);
      return { success: true, id: `local_${Date.now()}`, mode: 'local' };
    }
  }

  await new Promise(r => setTimeout(r, 600));
  return { success: true, id: `demo_${Date.now()}`, mode: 'local' };
}

/**
 * Subscribes an email to the newsletter.
 */
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; mode: 'firebase' | 'local' }> {
  try {
    const existing = JSON.parse(localStorage.getItem('prosetup_subscribers') || '[]');
    if (!existing.includes(email)) {
      existing.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('prosetup_subscribers', JSON.stringify(existing));
    }
  } catch (e) {
    console.error('Local newsletter storage failed', e);
  }

  if (isFirebaseConfigured && db) {
    try {
      await addDoc(collection(db, 'subscribers'), {
        email,
        subscribedAt: serverTimestamp(),
      });
      return { success: true, mode: 'firebase' };
    } catch (err) {
      console.error('Firestore newsletter subscription failed', err);
    }
  }

  await new Promise(r => setTimeout(r, 400));
  return { success: true, mode: 'local' };
}

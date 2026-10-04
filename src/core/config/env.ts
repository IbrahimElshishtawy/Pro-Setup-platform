export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "PRO SETUP",
  APP_URL: import.meta.env.VITE_APP_URL || "https://prosetup-platform.web.app",
  
  // Firebase configuration
  FIREBASE: {
    API_KEY: import.meta.env.VITE_FIREBASE_API_KEY || "",
    AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pro-setup-platform",
    STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    APP_ID: import.meta.env.VITE_FIREBASE_APP_ID || "",
    MEASUREMENT_ID: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
  },
  
  // Contacts
  CONTACT: {
    WHATSAPP: import.meta.env.VITE_CONTACT_WHATSAPP || "+201099959133",
    EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "prosetup203@gmail.com",
    PHONE: import.meta.env.VITE_CONTACT_PHONE || "+20 10 99959133",
    LOCATION: import.meta.env.VITE_OFFICE_LOCATION || "القاهرة، مصر",
  },
  
  IS_PROD: import.meta.env.PROD,
};

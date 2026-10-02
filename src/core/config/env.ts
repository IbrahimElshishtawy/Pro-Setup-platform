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
    WHATSAPP: import.meta.env.VITE_CONTACT_WHATSAPP || "+201234567890",
    EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "info@prosetup.com",
    PHONE: import.meta.env.VITE_CONTACT_PHONE || "+201234567890",
    LOCATION: import.meta.env.VITE_OFFICE_LOCATION || "Cairo, Egypt",
  },
  
  IS_PROD: import.meta.env.PROD,
};

// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// Replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmOywhAkmcyZtIPr6C_BLpufZbbYI1BS4",
  authDomain: "info-c844c.firebaseapp.com",
  projectId: "info-c844c",
  storageBucket: "info-c844c.firebasestorage.app",
  messagingSenderId: "1084124393555",
  appId: "1:1084124393555:web:55258b8a8ffc477c2c56a6",
  measurementId: "G-Y79W47T5X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

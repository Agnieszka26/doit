import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
/**
 * From the Firebase documentation on using and managing API keys:
 * Firebase-related APIs use API keys only to identify the Firebase project or app, not for authorization to call the API (like some other APIs allow).
 */
const firebaseConfig = {
  apiKey: 'AIzaSyCo2xFUFRKAlGI3a_XsxsY3AOgB11X5l3w',
  authDomain: 'doit-46b66.firebaseapp.com',
  projectId: 'doit-46b66',
  storageBucket: 'doit-46b66.firebasestorage.app',
  messagingSenderId: '779772987563',
  appId: '1:779772987563:web:273486ac3f29fd33ba4fee',
  measurementId: 'G-TK6RYSWS9C',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

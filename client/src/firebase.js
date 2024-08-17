// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-76365.firebaseapp.com",
  projectId: "auth-app-76365",
  storageBucket: "auth-app-76365.appspot.com",
  messagingSenderId: "818968292548",
  appId: "1:818968292548:web:cbdfe542fa7df74f82ad91",
  measurementId: "G-YQ0DXE535V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
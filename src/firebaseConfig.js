// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB5VnlS2f5dGAvRZWD8XluytUMXbghkqE",
  authDomain: "e-commerce-a9671.firebaseapp.com",
  projectId: "e-commerce-a9671",
  storageBucket: "e-commerce-a9671.appspot.com",
  messagingSenderId: "410267294487",
  appId: "1:410267294487:web:62f1a9a6e31b4980a83552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

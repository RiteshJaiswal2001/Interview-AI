import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAlNImc67Q8RqsBH4Z_FdPJy2-OE40V41k",
  authDomain: "interviewprep-9929a.firebaseapp.com",
  projectId: "interviewprep-9929a",
  storageBucket: "interviewprep-9929a.firebasestorage.app",
  messagingSenderId: "654684579557",
  appId: "1:654684579557:web:cc87caead8e5779e16160c",
  measurementId: "G-F9PJP91FDN",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

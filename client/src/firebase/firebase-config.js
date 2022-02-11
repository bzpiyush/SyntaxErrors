import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyS5qDJF7hdtK8RGDL_0MYLJs5xfLpSZI",
  authDomain: "hospitalconnect-d6ce9.firebaseapp.com",
  projectId: "hospitalconnect-d6ce9",
  storageBucket: "hospitalconnect-d6ce9.appspot.com",
  messagingSenderId: "984219328408",
  appId: "1:984219328408:web:586e4550783886bf0bd5ed",
  measurementId: "G-M5QJBMR19X"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
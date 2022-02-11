import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4n8xf9huh6TldzgJLBnnRpoWBfelkyb8",
  authDomain: "docsapp-aa831.firebaseapp.com",
  projectId: "docsapp-aa831",
  storageBucket: "docsapp-aa831.appspot.com",
  messagingSenderId: "262585077608",
  appId: "1:262585077608:web:0e654906be367179a690dd",
  measurementId: "G-PSZVNSWM1Z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvkLJqrTgJ_4PzurCxxJwI59ihsY41yr4",
  authDomain: "bettingmanager-6530f.firebaseapp.com",
  projectId: "bettingmanager-6530f",
  storageBucket: "bettingmanager-6530f.firebasestorage.app",
  messagingSenderId: "267112727408",
  appId: "1:267112727408:web:41d3d27718c4951cae05b5",
  measurementId: "G-7881RE6KX2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

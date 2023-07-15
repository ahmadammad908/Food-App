import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgIa_RYkez-k_2q1b6S0qABKizYmhyWME",
  authDomain: "fast-taste-c6a4a.firebaseapp.com",
  projectId: "fast-taste-c6a4a",
  storageBucket: "fast-taste-c6a4a.appspot.com",
  messagingSenderId: "621862032042",
  appId: "1:621862032042:web:23ac94d7ae08b59646b6d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);

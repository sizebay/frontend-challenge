// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqCxlnSHlfnuoUGELPrPMAdkfGJPh79I",
  authDomain: "tasks-app-9f0de.firebaseapp.com",
  projectId: "tasks-app-9f0de",
  storageBucket: "tasks-app-9f0de.appspot.com",
  messagingSenderId: "395639281326",
  appId: "1:395639281326:web:10dbc4c1e1899a008fff3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

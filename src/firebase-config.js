// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOZcAAN1_waYeTmzHzIIA8RQr1XrirGvY",
  authDomain: "myprofile-3eb09.firebaseapp.com",
  projectId: "myprofile-3eb09",
  storageBucket: "myprofile-3eb09.appspot.com",
  messagingSenderId: "1017913224008",
  appId: "1:1017913224008:web:e6d9ae1e23be0a275ce17d",
  measurementId: "G-61YXVGTNEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFireStore(app);
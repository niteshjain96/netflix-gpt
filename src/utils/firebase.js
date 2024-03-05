// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZWEiHaSpzJwHTdm9veqLYJPG0UMTXcWk",
  authDomain: "netflix-dd551.firebaseapp.com",
  projectId: "netflix-dd551",
  storageBucket: "netflix-dd551.appspot.com",
  messagingSenderId: "803064203762",
  appId: "1:803064203762:web:19935fd3192a0d4279036b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
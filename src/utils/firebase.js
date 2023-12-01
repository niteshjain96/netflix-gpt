// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCyY5LW7Mu9J7CPzr5uIJ6RRPFph56uOw",
  authDomain: "netflixgpt-6732a.firebaseapp.com",
  projectId: "netflixgpt-6732a",
  storageBucket: "netflixgpt-6732a.appspot.com",
  messagingSenderId: "453825718767",
  appId: "1:453825718767:web:ec44a85d97c3ce9164ee1a",
  measurementId: "G-12EYL22ZZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
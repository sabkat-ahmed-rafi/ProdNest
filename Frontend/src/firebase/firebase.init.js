// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgRT0H3KWmr6Vnre1uHaMbUXWLJh34LZs",
  authDomain: "test-f2f0b.firebaseapp.com",
  projectId: "test-f2f0b",
  storageBucket: "test-f2f0b.appspot.com",
  messagingSenderId: "25602220658",
  appId: "1:25602220658:web:50ad03c42e184596a198eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

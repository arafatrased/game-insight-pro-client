// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg9KUEyfhrBzOyIV_UIDqt1t_t60YAICA",
  authDomain: "game-review-54d0a.firebaseapp.com",
  projectId: "game-review-54d0a",
  storageBucket: "game-review-54d0a.firebasestorage.app",
  messagingSenderId: "580770770803",
  appId: "1:580770770803:web:af3b0534071dca6813df06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyD_7NOCBMz2bGgh9xja69i3wYWMxxi5iFg",
    authDomain: "portfolio-198ce.firebaseapp.com",
    projectId: "portfolio-198ce",
    storageBucket: "portfolio-198ce.firebasestorage.app",
    messagingSenderId: "126621452257",
    appId: "1:126621452257:web:d9b4b3585c1154f5c1f4a0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

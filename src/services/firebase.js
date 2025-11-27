import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyQT1Owi5-_F9HOi5xkTmZSWaAtQ3UIZQ",
    authDomain: "plataforma-ep.firebaseapp.com",
    projectId: "plataforma-ep",
    storageBucket: "plataforma-ep.firebasestorage.app",
    messagingSenderId: "167186069204",
    appId: "1:167186069204:web:f95eee755e2be4c8a1ad41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

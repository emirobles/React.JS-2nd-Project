// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnifPJMhQGO6OjgpqtDBRqgWrKMLDaB6U",
    authDomain: "kenshin-ecommerce.firebaseapp.com",
    projectId: "kenshin-ecommerce",
    storageBucket: "kenshin-ecommerce.appspot.com",
    messagingSenderId: "12151794515",
    appId: "1:12151794515:web:32acfdfcb147756c6b8fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


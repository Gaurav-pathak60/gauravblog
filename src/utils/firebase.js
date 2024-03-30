// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-418604.firebaseapp.com",
  projectId: "blog-app-418604",
  storageBucket: "blog-app-418604.appspot.com",
  messagingSenderId: "896564895782",
  appId: "1:896564895782:web:c3a56e5fc5c5901b6f06e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
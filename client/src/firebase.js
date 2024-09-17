// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rajeshestate-62a46.firebaseapp.com",
  projectId: "rajeshestate-62a46",
  storageBucket: "rajeshestate-62a46.appspot.com",
  messagingSenderId: "160033306997",
  appId: "1:160033306997:web:3fd5c17305cc6cc0157b3c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

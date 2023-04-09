import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA7K4wMS_FbGe-C96pBJz6ZBZWm6X6kUFY",
  authDomain: "react-netflix-clone-49ab0.firebaseapp.com",
  projectId: "react-netflix-clone-49ab0",
  storageBucket: "react-netflix-clone-49ab0.appspot.com",
  messagingSenderId: "162059934414",
  appId: "1:162059934414:web:24c2388ade33e350934e9f",
  measurementId: "G-TC1VF4YZ6T"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

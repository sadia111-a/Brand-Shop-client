import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAmYZ6XpVYOsh14Jn-8IRINjjlCfziVCM",
  authDomain: "brand-shop-f0453.firebaseapp.com",
  projectId: "brand-shop-f0453",
  storageBucket: "brand-shop-f0453.appspot.com",
  messagingSenderId: "373252062299",
  appId: "1:373252062299:web:988f03a244abb959fdd37e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZk3tGe2vTeSHcsiml6L5zVVfYLOWIvJo",
  authDomain: "carinventory-f3fb4.firebaseapp.com",
  projectId: "carinventory-f3fb4",
  storageBucket: "carinventory-f3fb4.appspot.com",
  messagingSenderId: "870302772675",
  appId: "1:870302772675:web:b6b08f75582b85e6af2176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

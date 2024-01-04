import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBM8krobQhbfdGBrkuHIcq7DlAzQydikKI",
  authDomain: "the-10-boys-club.firebaseapp.com",
  projectId: "the-10-boys-club",
  storageBucket: "the-10-boys-club.appspot.com",
  messagingSenderId: "1550792474",
  appId: "1:1550792474:web:6b963936a0a14232a81ea3",
  measurementId: "G-05J3WKYRMV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
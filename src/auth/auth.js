// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdF5m_HC9jr1d6DTJbWAtf3Qz-oh3_E4",
  authDomain: "boys-club-v1.firebaseapp.com",
  projectId: "boys-club-v1",
  storageBucket: "boys-club-v1.appspot.com",
  messagingSenderId: "517430506806",
  appId: "1:517430506806:web:62bc8d1ab34a30e6116f97",
  measurementId: "G-C6EMJF1ECG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install firebase// for installing firebase into my app kesho incase it fails to work.
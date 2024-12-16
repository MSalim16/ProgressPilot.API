// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1M3eKM3S9g6zW64OOcfm4w2EwYzhSl9Y",
  authDomain: "progresspilot-c0e15.firebaseapp.com",
  projectId: "progresspilot-c0e15",
  storageBucket: "progresspilot-c0e15.firebasestorage.app",
  messagingSenderId: "900347606284",
  appId: "1:900347606284:web:83c2ba191cb925f855c529",
  measurementId: "G-XWP732LBER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
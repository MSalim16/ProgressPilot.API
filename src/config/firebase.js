// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-AA3ZV1Db6ul7gxBYnlgsK91PxO1AOow",
  authDomain: "progresspilot-1277a.firebaseapp.com",
  projectId: "progresspilot-1277a",
  storageBucket: "progresspilot-1277a.firebasestorage.app",
  messagingSenderId: "158593835530",
  appId: "1:158593835530:web:9701992dc00409f346b5f3",
  measurementId: "G-78JPGDDMRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
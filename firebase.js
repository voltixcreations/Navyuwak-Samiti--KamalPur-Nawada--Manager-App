// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk9kfv9_rzcxgyxf60A92UDgOWSLYsdh8",
  authDomain: "donation-management-8598a.firebaseapp.com",
  projectId: "donation-management-8598a",
  storageBucket: "donation-management-8598a.firebasestorage.app",
  messagingSenderId: "616961540877",
  appId: "1:616961540877:web:37d56aa10381807aaf2644",
  measurementId: "G-11TNRYNWRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
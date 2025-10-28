// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWEnpdRQ0cjdImChqgXpvxYWZo9lsoZFE",
  authDomain: "tubestampdemo.firebaseapp.com",
  projectId: "tubestampdemo",
  storageBucket: "tubestampdemo.firebasestorage.app",
  messagingSenderId: "396367008440",
  appId: "1:396367008440:web:a9e98f82a4d0026ff8da4d",
  measurementId: "G-5G3YT232BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };


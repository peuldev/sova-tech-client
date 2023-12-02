// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3vuHXe8jOZ_wIscBZJ0vI5gO8T9MWYY",
  authDomain: "sova-tech.firebaseapp.com",
  projectId: "sova-tech",
  storageBucket: "sova-tech.appspot.com",
  messagingSenderId: "757720684987",
  appId: "1:757720684987:web:f9f1b0e2d14d3499470c9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

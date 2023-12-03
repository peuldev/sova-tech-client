// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV0Yr4t8lZzfoglBGpLR3ZqM_UFcyRt2U",
  authDomain: "sova-tech-a7640.firebaseapp.com",
  projectId: "sova-tech-a7640",
  storageBucket: "sova-tech-a7640.appspot.com",
  messagingSenderId: "66441777317",
  appId: "1:66441777317:web:a24be35ee8267bbc3bbd4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

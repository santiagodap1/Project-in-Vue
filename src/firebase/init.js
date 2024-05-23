// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJf-135cNYQkG9CVWxpVNqDr50QvRAVa0",
  authDomain: "projeto1-frontend.firebaseapp.com",
  projectId: "projeto1-frontend",
  storageBucket: "projeto1-frontend.appspot.com",
  messagingSenderId: "380330379600",
  appId: "1:380330379600:web:8d8c8b8edd246404ce8455",
  measurementId: "G-JV0PVD725N"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
export default db;
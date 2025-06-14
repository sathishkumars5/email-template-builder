// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBOvzvRMxcn0groOEBQm614W2L17TUaJfw",
  authDomain: "email-template-builder-a8de9.firebaseapp.com",
  projectId: "email-template-builder-a8de9",
  storageBucket: "email-template-builder-a8de9.appspot.com",
  messagingSenderId: "965003447677",
  appId: "1:965003447677:web:1eeb78c2d23503826d5014",
  measurementId: "G-3NGLD5VV8Z"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
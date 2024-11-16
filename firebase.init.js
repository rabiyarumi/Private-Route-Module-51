// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3dQdG6GCOza8RwnWqZPaBYvWrxfdNtqQ",
  authDomain: "auth-with-private-route-1abf3.firebaseapp.com",
  projectId: "auth-with-private-route-1abf3",
  storageBucket: "auth-with-private-route-1abf3.firebasestorage.app",
  messagingSenderId: "18475103466",
  appId: "1:18475103466:web:2ff7ead9fc65939e341393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
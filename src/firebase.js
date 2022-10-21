// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9169AO8sFDClyhnsJ5ZmFZo2Bu2HtRJs",
  authDomain: "netflix-clone-next-7d945.firebaseapp.com",
  projectId: "netflix-clone-next-7d945",
  storageBucket: "netflix-clone-next-7d945.appspot.com",
  messagingSenderId: "155296789531",
  appId: "1:155296789531:web:d7420a6717ff6412a6b4be",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

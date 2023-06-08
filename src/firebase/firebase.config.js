// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrP6rchi_sgKtUlSO1bAMTAYCsAxEK2jE",
  authDomain: "youspeak-academy.firebaseapp.com",
  projectId: "youspeak-academy",
  storageBucket: "youspeak-academy.appspot.com",
  messagingSenderId: "277119396168",
  appId: "1:277119396168:web:21cd193d9041ef42fa6b7d"
  //   apiKey: import.meta.env.VITE_apiKey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   projectId: import.meta.env.VITE_projectId,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appId,
  
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
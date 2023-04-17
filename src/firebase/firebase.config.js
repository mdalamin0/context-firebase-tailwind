// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNlaa9plTscfsKtlaYbZ6uD9c-9ri-tg",
  authDomain: "context-firebase-tailwind.firebaseapp.com",
  projectId: "context-firebase-tailwind",
  storageBucket: "context-firebase-tailwind.appspot.com",
  messagingSenderId: "541928959216",
  appId: "1:541928959216:web:0fb23ba1a634c927bf2635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
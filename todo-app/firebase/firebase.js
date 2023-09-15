import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDPg0AoSEAJIxdlHuhKwmK1xZDGuVR2268",
  authDomain: "todoapp-537e3.firebaseapp.com",
  projectId: "todoapp-537e3",
  storageBucket: "todoapp-537e3.appspot.com",
  messagingSenderId: "1096332528283",
  appId: "1:1096332528283:web:5bb03ca6ca63c280cdd43e",
  measurementId: "G-TQB4C5Q3F6"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore(app)

console.log(db)
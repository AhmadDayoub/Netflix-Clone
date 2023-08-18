import { initializeApp } from "firebase/app";
import {getAuth, setAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVGXUZPRzFeSND3qBs0EfZmFRqrbl7DAE",
  authDomain: "netflix-react-1f84f.firebaseapp.com",
  projectId: "netflix-react-1f84f",
  storageBucket: "netflix-react-1f84f.appspot.com",
  messagingSenderId: "517006880445",
  appId: "1:517006880445:web:dcd00c3df85293339bd1d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
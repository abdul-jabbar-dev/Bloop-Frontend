import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpQKMtChxFIcJP40lYZ7RizkRjUHB0pYY",
  authDomain: "bloop-975c2.firebaseapp.com",
  projectId: "bloop-975c2",
  storageBucket: "bloop-975c2.appspot.com",
  messagingSenderId: "726773761160",
  appId: "1:726773761160:web:54d19ff50d6d077a730b3d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
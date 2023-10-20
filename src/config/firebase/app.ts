import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCY5mvgYI0U5pHJOFB1Svp_21sf3FbfZUU",
  authDomain: "bloop-7626e.firebaseapp.com",
  projectId: "bloop-7626e",
  storageBucket: "bloop-7626e.appspot.com",
  messagingSenderId: "714374592588",
  appId: "1:714374592588:web:735783e1d0938a20dbdce9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCoVhdhrm2cPHYJh9XQvKyqkXUEfPI8W84",
  authDomain: "saas-translator-5eec7.firebaseapp.com",
  projectId: "saas-translator-5eec7",
  storageBucket: "saas-translator-5eec7.appspot.com",
  messagingSenderId: "579183669715",
  appId: "1:579183669715:web:1c72f24e89b3fbceb6ff26",
};

// check
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };

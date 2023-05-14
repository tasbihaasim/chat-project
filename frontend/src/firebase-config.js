import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCeN5J4dVbaFsE9l0u3B9fpHGXmGb_bTQs",
    authDomain: "golang-app-34d13.firebaseapp.com",
    projectId: "golang-app-34d13",
    storageBucket: "golang-app-34d13.appspot.com",
    messagingSenderId: "59500009828",
    appId: "1:59500009828:web:b780aafe5a70852f044271",
    measurementId: "G-QH34V3M7HK"
  };



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore();

export { auth, firestore };
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACCLF9_r6c271Op4hzrxGO8cwjQfsi-Rs",
    authDomain: "proyectofinalreact-3731d.firebaseapp.com",
    projectId: "proyectofinalreact-3731d",
    storageBucket: "proyectofinalreact-3731d.appspot.com",
    messagingSenderId: "796706275572",
    appId: "1:796706275572:web:5b100341f5553cc8999ea1"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
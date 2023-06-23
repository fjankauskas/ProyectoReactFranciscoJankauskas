import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtSNsTZTEvQ8_9_HzaGEfdbQnto3_weAA",
    authDomain: "entregaproyectoreact.firebaseapp.com",
    projectId: "entregaproyectoreact",
    storageBucket: "entregaproyectoreact.appspot.com",
    messagingSenderId: "251073263947",
    appId: "1:251073263947:web:c6258a21c38c0232cc90ce"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
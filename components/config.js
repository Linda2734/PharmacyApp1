
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyDhosqCsNYqhBJ0dvVFtupFCp0SpgXqlMs",
  authDomain: "pharmacy-app-a81d8.firebaseapp.com",
  databaseURL: "https://pharmacy-app-a81d8-default-rtdb.firebaseio.com",
  projectId: "pharmacy-app-a81d8",
  storageBucket: "pharmacy-app-a81d8.appspot.com",
  messagingSenderId: "232437046276",
  appId: "1:232437046276:web:b3402077d930b128722951"
};

// const app = firebase.initializeApp(firebaseConfig);

// // Firestore
// const db = app.firestore();
const fire = initializeApp(firebaseConfig);

export default fire;
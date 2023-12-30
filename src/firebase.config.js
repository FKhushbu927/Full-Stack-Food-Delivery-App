
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNjasBWARVA2Vv-Homutn7YDoQ3B0QTQ8",
  authDomain: "restaurantapp-682af.firebaseapp.com",
  databaseURL: "https://restaurantapp-682af-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-682af",
  storageBucket: "restaurantapp-682af.appspot.com",
  messagingSenderId: "1022207369864",
  appId: "1:1022207369864:web:f4c7f24f633e2f6ed5353d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
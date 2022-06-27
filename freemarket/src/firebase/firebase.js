import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzFUjfDg4T-Ybd7--BrZV_o7UzrtTmIHg",
  authDomain: "freemarket-91358.firebaseapp.com",
  projectId: "freemarket-91358",
  storageBucket: "freemarket-91358.appspot.com",
  messagingSenderId: "843426516836",
  appId: "1:843426516836:web:05eaa8fac9d567f216f471",
  measurementId: "G-KLCNVH6WRE",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db

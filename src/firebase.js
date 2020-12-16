import firebase from "firebase";

const API_KEY = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "whatsapp-d0cc0.firebaseapp.com",
  databaseURL: "https://whatsapp-d0cc0.firebaseio.com",
  projectId: "whatsapp-d0cc0",
  storageBucket: "whatsapp-d0cc0.appspot.com",
  messagingSenderId: "7967753030",
  appId: "1:7967753030:web:24e6dc1c16e57809e31b47",
  measurementId: "G-TB7DZBHNSN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

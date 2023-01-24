import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYEMZv6I6wic7iYOdvVGh1FSsiUvHQRbU",
  authDomain: "disneyplus-clone-c1a44.firebaseapp.com",
  projectId: "disneyplus-clone-c1a44",
  storageBucket: "disneyplus-clone-c1a44.appspot.com",
  messagingSenderId: "397569729051",
  appId: "1:397569729051:web:2b0317bddb453fa4280ebe",
  measurementId: "G-1MHV9YGWRB",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Use these for provider & storage
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

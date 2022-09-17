import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCvtt5u1rfHHvpp1XOSqH9SsFHCMK5KOaE",
  authDomain: "netflix-7501b.firebaseapp.com",
  databaseURL: "https://netflix-7501b.firebaseio.com",
  projectId: "netflix-7501b",
  storageBucket: "netflix-7501b.appspot.com",
  messagingSenderId: "155523137965",
  appId: "1:155523137965:web:12dff25588132cd8fda124",
  measurementId: "G-4PLDWV6M8N",
};

// Initialize Firebase

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);
// Inorder to work this one, make sure you set the rules in your firebase firestore to true

export { firebase };

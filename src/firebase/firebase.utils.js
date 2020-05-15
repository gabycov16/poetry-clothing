import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJRAB3g7wPRKVgloJsW71qDKJbFCWjBAM",
  authDomain: "poetry-clothing.firebaseapp.com",
  databaseURL: "https://poetry-clothing.firebaseio.com",
  projectId: "poetry-clothing",
  storageBucket: "poetry-clothing.appspot.com",
  messagingSenderId: "990313347967",
  appId: "1:990313347967:web:e2d66ab702d4832046384a",
  measurementId: "G-5J16S673J3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

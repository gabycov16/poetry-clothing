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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

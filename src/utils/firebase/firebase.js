// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_snA1PwaEbUkMrnkDp8lCDGVhqc3gqs",
  authDomain: "crwn-clothing-db-e9adb.firebaseapp.com",
  projectId: "crwn-clothing-db-e9adb",
  storageBucket: "crwn-clothing-db-e9adb.appspot.com",
  messagingSenderId: "106832794206",
  appId: "1:106832794206:web:a7f33152b4bf4fb2a19acf",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // if there is no userAuth don't need to run the function
  if (!userAuth) {
    return;
  }
  // check if there is a doc reference
  const userDocRef = doc(db, "users", userAuth.uid);
  // get the user document snapshot
  const userSnapshot = await getDoc(userDocRef);
  // check if the user data exists
  // if user data does not exist
  // create/set the document with the data from userAuth in the collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // return the user document reference
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if there is no email or password don't need to run the function
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

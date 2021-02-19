import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'crwn-db-db490.firebaseapp.com',
  projectId: 'crwn-db-db490',
  storageBucket: 'crwn-db-db490.appspot.com',
  messagingSenderId: '127382862307',
  appId: '1:127382862307:web:d7a1abe8573d0400f488d6',
  measurementId: 'G-TEGV618S4Z',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

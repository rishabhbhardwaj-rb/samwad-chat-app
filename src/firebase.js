
import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB8GOE_bZoZBz2wORsr5uaE0xgK6mRucQ4",
    authDomain: "samwad-ec7b2.firebaseapp.com",
    projectId: "samwad-ec7b2",
    storageBucket: "samwad-ec7b2.appspot.com",
    messagingSenderId: "646162011599",
    appId: "1:646162011599:web:6e1ca587591dceb372eeba"
  }).auth();


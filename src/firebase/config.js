import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgKcdUzPC2s4CSvrWWkXsxCr1z3qu94yk",
    authDomain: "proyectocv-firegram.firebaseapp.com",
    projectId: "proyectocv-firegram",
    storageBucket: "proyectocv-firegram.appspot.com",
    messagingSenderId: "779915365842",
    appId: "1:779915365842:web:e3a8d97d458fad673ccc0b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};
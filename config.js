import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyATp5H5QFGmXYmoU1ryDmx9-_L-bDl2pdU",
    authDomain: "wily-f9f1f.firebaseapp.com",
    projectId: "wily-f9f1f",
    storageBucket: "wily-f9f1f.appspot.com",
    messagingSenderId: "986995461562",
    appId: "1:986995461562:web:965bebb8f21982244fa183"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  
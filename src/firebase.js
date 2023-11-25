import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaJM4KaEhjGN-GP0hyTkzUTVpnRTJlLHc",
    authDomain: "discord-app-9ed47.firebaseapp.com",
    projectId: "discord-app-9ed47",
    storageBucket: "discord-app-9ed47.appspot.com",
    messagingSenderId: "513334509361",
    appId: "1:513334509361:web:0b97090d8d32caccfd3a10",
    measurementId: "G-VSB0ZKQV16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
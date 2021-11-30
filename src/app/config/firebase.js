import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC-AHjchSWG4DMKOSpAzG5eLFmC3wIQJmY",
    authDomain: "winhype-6b13f.firebaseapp.com",
    projectId: "winhype-6b13f",
    storageBucket: "winhype-6b13f.appspot.com",
    messagingSenderId: "894393342613",
    appId: "1:894393342613:web:7bcaadfdd4f5038bb5199c"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEKfnjUFkkkHKC7dLRBK9KujwjNdaFS6o",
    authDomain: "linked-f822b.firebaseapp.com",
    projectId: "linked-f822b",
    storageBucket: "linked-f822b.appspot.com",
    messagingSenderId: "277972775975",
    appId: "1:277972775975:web:068d2b92ca5048fd938a02",
    measurementId: "G-XRGBLE0BDR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
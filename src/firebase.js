import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_0Xyed_Pi08FLT72itWF2aNGvpurUHz0",
    authDomain: "clone-aldo.firebaseapp.com",
    projectId: "clone-aldo",
    storageBucket: "clone-aldo.appspot.com",
    messagingSenderId: "327575150373",
    appId: "1:327575150373:web:9c22c09df241b00c43c4cc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider };
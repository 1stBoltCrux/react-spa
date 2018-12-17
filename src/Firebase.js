import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCAwdYF2ZQCsSXxSM7J3rU_A4UbHaoOjtQ",
    authDomain: "react-spas-d69b8.firebaseapp.com",
    databaseURL: "https://react-spas-d69b8.firebaseio.com",
    projectId: "react-spas-d69b8",
    storageBucket: "react-spas-d69b8.appspot.com",
    messagingSenderId: "166022681598"
  };


  firebase.initializeApp(config);

  export const provider = new firebase.aith.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;

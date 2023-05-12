import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDDYUgbTYElnv-2AMzZDyqFdVAOdccEBJM",
  authDomain: "e--library-1d51b.firebaseapp.com",
  projectId: "e--library-1d51b",
  storageBucket: "e--library-1d51b.appspot.com",
  messagingSenderId: "535209243664",
  appId: "1:535209243664:web:5746a9972ee7ab16ef8695"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

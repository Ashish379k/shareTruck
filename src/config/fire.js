import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDjJtokpJf00Nh26XItN69aJf1bvGv70vQ",
    authDomain: "tuckshare-64029.firebaseapp.com",
    databaseURL: "https://tuckshare-64029.firebaseio.com",
    projectId: "tuckshare-64029",
    storageBucket: "tuckshare-64029.appspot.com",
    messagingSenderId: "1036112501713",
    appId: "1:1036112501713:web:d15257ecf6f2ea40119ef0",
    measurementId: "G-NM11XVXB0Z"
  };

  const fire = firebase.initializeApp(firebaseConfig)
  export default fire
import React from 'react'
import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAmGMJ6LncKR1t9LoMXi9igvKVRBgDoOYA",
    authDomain: "mystore-5f875.firebaseapp.com",
    databaseURL: "https://mystore-5f875.firebaseio.com",
    projectId: "mystore-5f875",
    storageBucket: "mystore-5f875.appspot.com",
    messagingSenderId: "32289441644",
    appId: "1:32289441644:web:6f6308e1a8b8fbc542d549",
    measurementId: "G-T453BG28S6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  export default firebase
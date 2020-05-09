import React from 'react'
import firebase from './firebase'

function addData (postData){
    var newPostKey = firebase.database().ref().child('post').push().key;
    var updates = {};
    updates['/posts/' + newPostKey] = postData;


}

export default addData
import React from 'react'
import firebase from './firebase'

function addData(type,postData){
    const user = firebase.auth().currentUser.uid
    // Get a key for a new Post.
var newPostKey = firebase.database().ref().child(type).push().key;

// Write the new post's data simultaneously in the posts list and the user's post list.
var updates = {};
//   updates['/posts/' + newPostKey] = postData;
updates['userData/' + user + '/' + newPostKey] = postData;

return firebase.database().ref().update(updates);
}
export default addData
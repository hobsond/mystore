import React from 'react'
import firebase from './firebase'

function updateProfile(data){
    var user = firebase.auth().currentUser;

user.updateProfile(data)
.then(function() {
  // Update successful.
  console.log('success' + user.displayName)
  
})
.catch(function(error) {
  // An error happened.
  console.log(error)
});
}
export default updateProfile
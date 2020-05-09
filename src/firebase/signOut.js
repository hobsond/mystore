import React from 'react'
import firebase from './firebase'
import {Redirect} from 'react-router-dom'

const signout = () =>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        return <Redirect to='/'/>
      }, function(error) {
        // An error happened.
      });

}
export default signout
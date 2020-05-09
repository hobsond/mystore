import React,{useEffect} from 'react';
import firebase from './firebase/firebase'
import {BrowserRouter,Route,Link} from 'react-router-dom'
/////////////////////////////😇 components 😇 //////////////////////////////////////////////////
import Login from './components/Login'

import Signup from './components/Signup'
/////////////////////////////😇 components 😇 //////////////////////////////////////////////////

/////////////////////////////↪️ Hooks ↩️ //////////////////////////////////////////////////

import useLogin from './hooks/useLogin'
import useSignup from './hooks/useSignup'
/////////////////////////////↪️ Hooks ↩️ //////////////////////////////////////////////////



import './App.css';

function App() {


/////////////////////////////😇 login and sign up hooks 😇 //////////////////////////////////////////////////


  ////////////////////////////////////// user Login hooks & useEffect /////////////////////////////////////
  
  
  const [loginvalue,addLoginValue,addLoginData,newLoginData,logged,setLoggedIn] = useLogin({

    email:'',
    password:''
  })
  ///////////////////////////😆 get user information ///😆///////////////////////////////
  ////useEfffect for getting logged in users data ex:displayName ,uuid ,etc.../////

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setLoggedIn(true)
        // alert('user signed in')
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email)
        // ...
      } else {
        setLoggedIn(false)
        
        // User is signed out.
        // ...
      }
    });
  },[firebase.auth().currentUser])

  ///////////////////////////😆 get user information ///😆///////////////////////////////



  ////////////////////////////////////// user Log in hooks & useEffect /////////////////////////////////////


  ////////////////////////////////////user sign up //////////////////////////////////////////////////////


  const [signupvalue,addSignValue,addSignData,newSignData] = useSignup({
    username:'',
    email:'',
    password:''
  
  })
  ////////////////////////////////////user sign up //////////////////////////////////////////////////////

/////////////////////////////😇 login and sign up hooks 😇 //////////////////////////////////////////////////

  return (
    <div className="App">
    <BrowserRouter>
      <nav>

/////////////////////////////🔗 link to landing page 🔗//////////////////////////////////////////////////
    
        <Link to ={'/'}>Home</Link>
/////////////////////////////🔗 link to landing page 🔗//////////////////////////////////////////////////

/////////////////////////////🔗 link to log in page 🔗//////////////////////////////////////////////////

        <Link to={'/login'}>Login</Link>
/////////////////////////////🔗 link to log in page 🔗//////////////////////////////////////////////////


/////////////////////////////🔗 link to sign up page 🔗//////////////////////////////////////////////////

        <Link to={'/sign-up'}>Sign Up</Link>
/////////////////////////////🔗 link to sign up page 🔗//////////////////////////////////////////////////



      </nav>
      
      <Route path='/login'>
        <Login addData={addLoginData} addValue={addLoginValue}/>
      </Route>

      <Route path='/sign-up'>
       <Signup addSignData={addSignData} addSignValue={addSignValue} setLoggedIn={setLoggedIn} />
      </Route>

      <Route path={'/'}>

      </Route>
    
      

    </BrowserRouter>
   


      
    </div>
  );
}

export default App;

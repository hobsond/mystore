import React,{useEffect,useState} from 'react';
import firebase from './firebase/firebase'
import {BrowserRouter,Route,Link,Switch, Redirect} from 'react-router-dom'
/////////////////////////////😇 components 😇 //////////////////////////////////////////////////
import Login from './components/Login'
import UserHomepage from './components/UserHomepage'
import Signup from './components/Signup'
import signOut from './firebase/signOut'
/////////////////////////////😇 components 😇 //////////////////////////////////////////////////

/////////////////////////////↪️ Hooks ↩️ //////////////////////////////////////////////////

import useLogin from './hooks/useLogin'
import useSignup from './hooks/useSignup'
/////////////////////////////↪️ Hooks ↩️ //////////////////////////////////////////////////



import './App.css';
import signout from './firebase/signOut';

function App() {


/////////////////////////////😇 login and sign up hooks 😇 //////////////////////////////////////////////////


  ////////////////////////////////////// user Login hooks & useEffect /////////////////////////////////////
  
  
  const [loginvalue,addLoginValue,addLoginData,newLoginData,logged,setLoggedIn] = useLogin({

    email:'',
    password:''
  })
  const [userData,SetuserData]= useState({})
 




  ///////////////////////////😆 get user information ///😆///////////////////////////////

  
  ////useEfffect for getting logged in users data ex:displayName ,uuid ,etc.../////

  const user = firebase.auth().currentUser

    useEffect(()=>
     {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setLoggedIn(true)
        // alert('user signed in')
        // User is signed in.
       const userInfo = {
        displayName : user.displayName,
        email : user.email,
        emailVerified : user.emailVerified,
        photoURL : user.photoURL,
        isAnonymous : user.isAnonymous,
        uid : user.uid,
        providerData : user.providerData
      }
      SetuserData(userInfo)
        
     
       
        // ...
      } else {
        setLoggedIn(false)
        
        // User is signed out.
        // ...
      }
    });
  },[])
  

  

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
    {logged ?  <Redirect to={`/${userData.displayName || userData.uid}/homepage`}/>:null}
    {/* {!userData.displayName ? setDisplay(true) : console.log('name')} */}
    {/* {displayName ? <DisplayMortal /> : null} */}
    
      <nav>

      {logged ?
      <div>
        <Link to={`/${userData.displayName || userData.uid}/homepage`}>Homepage</Link>
        <Link to={`/${userData.displayName || userData.uid}/messages`}>Messages</Link>
        <Link to={`/${userData.displayName || userData.uid}/store`}>Store</Link>
        <a onClick={signout}>Sign out</a>


      </div>


        :
        
        <div> 
        <Link to ={'/'}>Home</Link>


        <Link to={'/login'}>Login</Link>



        <Link to={'/sign-up'}>Sign Up</Link>
        </div>
        
      }


      </nav>
         <Route to='/:user/page'>

        </Route>

        <Route to='/store/:item'>

        </Route>

        <Route to='/:user/store'>

        </Route>

        <Route to='/:user/messages'>

        </Route>

        <Route to='/:user/homepage'>
          <UserHomepage userData={userData} logged={logged}  />

        </Route>
      
        <Route path='/login'>
          <Login addData={addLoginData} addValue={addLoginValue}/>
        </Route>

        <Route path='/sign-up'>
        <Signup addSignData={addSignData} addSignValue={addSignValue} setLoggedIn={setLoggedIn} />
        </Route>

        <Route exact path={'/'}>

        </Route>
      
        

      
    </BrowserRouter>
   


      
    </div>
  );
}

export default App;

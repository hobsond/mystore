import React, {useState,useEffect} from 'react'
import useForm from './useForm'
import addData from '../firebase/addData'

import firebase from '../firebase/firebase'


const useSignup = (initial)=>{
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// New user Sign up form hook /////////////////////////////////////////
  const [value,addValue,setValue,newData,setNewData,] =useForm({})
  const addSignValue = addValue
  
//   const[loggedIn,setLoggedIn]=useState(false)
  

  const addSignData = e=>{
    e.preventDefault()
    setNewData(value)

////////////////////////////////////firebase creating user///////////////////////////////////////////////////
    
    firebase.auth().createUserWithEmailAndPassword(value.email || '', value.password||'')
    
    .then(()=>{


////////////////😄//////////😄 if i can can create the user 😄//////😄//////////////////////////////////

        // setLoggedIn(true)
        firebase.auth().signInWithEmailAndPassword(value.email || '', value.password||'')
        firebase.database().ref('userData/' + firebase.auth().currentUser.uid ).set({
            email:value.email,
            username:value.username,

        })
////////////////😄//////////😄///////💯////💯////💯///// 😄//////😄//////////////////////////////////




////////////////😠//////////😠///if cannot find current user/// 😠//////😠////////////////////////////

        .catch(err=>console.log(err.message))

////////////////😠//////////😠/////////😞//////😞/////.😞/////😠//////😠////////////////////////////




/////////////////✔ ✔ ✔ ✔ ✔ ✔ validate to see if i signup is succcess ✔ ✔ ✔ ✔ ✔ /////////////////////////


        console.log('success')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    })
    
    
    .catch(function(error) {
        

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('fail' + errorMessage)
        // ...
      });

    // addStorage(key,JSON.parse(value))
    setValue(initial)
}

    

    
      return [value,addSignValue,addSignData,newData]
}
export default useSignup
import React, {useState,useEffect} from 'react'
import useForm from './useForm'
import firebase from '../firebase/firebase'


const useLogin = (initial)=>{
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////🐉 set state values 🐉///////////////////////////////////////////////////////
  const [value,addValue,setValue,newData,setNewData,] =useForm({})
  const addLoginValue = addValue
  
  const[loggedIn,setLoggedIn]=useState(false)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  

  const addLoginData = e=>{
    e.preventDefault()
    setNewData(value)
   
    firebase.auth().signInWithEmailAndPassword(value.email || '', value.password||'')
    
    .then(()=>{
        console.log('success')
        setLoggedIn(true)
    })
    
    
    .catch(function(error) {
        debugger

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('fail')
        // ...
      });

    // addStorage(key,JSON.parse(value))
    setValue(initial)
}

    

    
      return [value,addLoginValue,addLoginData,newData,loggedIn,setLoggedIn]
}
export default useLogin
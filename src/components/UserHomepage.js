import React, {useState,useEffect} from 'react'
import firebase from '../firebase/firebase'
import DisplayMortal from './displayMortal'
import useForm from '../hooks/useForm'
import addData from '../firebase/addData'
import updateProfile from '../firebase/updateProfile'



export default function UserHomepage(props) {
    const [value,addValue,setValue,newData,setNewData,] = useForm({})
    const [displayName,setDisplay] = useState(false)
    const {userData}=props
    useEffect(()=>{
        // Get a reference to the database service
    var database = firebase.database();
    console.log(database)
    })
   

    return (
        <div>
            {props.logged &&!userData.displayName ? 
            <DisplayMortal 
             value ={value} 
             addValue={addValue} 
             setNewData={setNewData} 
             update={updateProfile}
             newData={newData}
             /> :null}

            
        </div>
    )
}

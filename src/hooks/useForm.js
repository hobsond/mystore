import React,{useState} from 'react'
import useLocalStorage from './useLocalStorage'
import firebase from '../firebase/firebase'


const useForm = (initial)=>{
    // const [local, addLocal] = useLocalStorage(key,'')
    const [value,setValue]=useState(initial)
    const [newData,setNewData]=useState({})
    const [key,setKey]= useState('')
    const [storage, addStorage]=useState('','')

    const addValue = e=>{
        setValue({...value,[e.target.name]:e.target.value})
    }
    
    return [value,addValue,setValue,newData,setNewData,]
}
export default useForm
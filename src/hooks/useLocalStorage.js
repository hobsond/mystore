import React, {useState} from 'react'

const useLocalStorage = (key,item)=>{
    const storage = localStorage.getItem(key)
    // const [current,setCurrent]= useState(storage)
    const [local,setLocal] = useState(storage)
    const addLocal = ()=>{
        localStorage.setItem(key,item)
    }
    return [local,addLocal]
}

export default useLocalStorage
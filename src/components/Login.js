import React from 'react'
import useForm from '../hooks/useForm'


export default function Login(props) {
    
    return (
        <form onSubmit={props.addData}>
             <input name='email' placeholder='email' onChange={props.addValue}/>
           
            <input name='password' placeholder='password' onChange={props.addValue}/>
            <button onClick={props.addData}>Login</button>
            
        </form>
    )
}

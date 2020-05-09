import React from 'react'

export default function Signup(props) {
    return (
        <form onSubmit={props.addSignData}>
            <input name='username' onChange={props.addSignValue}/>

            <input name='email' onChange={props.addSignValue}/>
            
            <input name='password' type='password' onChange={props.addSignValue}/>
            <button onClick={props.addSignData}/>
            
            
        </form>
    )
}

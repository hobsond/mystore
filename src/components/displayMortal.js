import React from 'react'


export default function DisplayMortal(props) {
    const submit = evt=>{
        props.setNewData(props.value)
        props.update(props.newData)
    }

    return (
        <form onSubmit={submit}>
            <input name='displayName' onChange={props.addValue} type='text'/>
            <button>Accept</button>
        </form>
    )
}

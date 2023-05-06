import React from 'react'
import { useRef } from 'react'

export default function UseRef() {
    const inputName = useRef(null)
    const click = () => {
        console.log(`Your name is ${inputName.current.value}`)
    }

    return (
        <div>
            <input type="text" placeholder='Enter Your Name' ref={inputName} />
            <button onClick={click}>Console Name</button>
            <hr />
            
        </div>
    )
}

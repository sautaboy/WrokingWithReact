import React from 'react'
import { useReducer } from 'react'
// import { act } from 'react-dom/test-utils'

const reducer = (state, acttion) => {
    switch (acttion.type) {
        case "FirstPerson":
            return { firstPerson: state.firstPerson = "Welcome To Our World Mr:Sauta Boy", secondPerson: false }
        default: return state
    }
}
export default function UseReducer2() {

    const [state, dispatch] = useReducer(reducer, { firstPerson: "What is Your Name", secondPerson: true, })
    return (
        <div>
            <hr />
            <h2>{state.firstPerson}</h2>
            {state.secondPerson && <h2>My Name is Sauta Boy.</h2>}
            <button onClick={() => {
                dispatch({ type: "FirstPerson" })
            }}>Click Here</button>
        </div>
    )
}

import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UseContext'

export default function SignUp() {
    const { setUserName, setUserEmail, setUserPhone } = useContext(AppContext)
    return (
        <div>
            <input type="text" placeholder='Enter Your UserName' onChange={(event) => {
                setUserName(event.target.value)
            }} />
            <input type="text" placeholder='Enter Your Email' onChange={(event) => {
                setUserEmail(event.target.value)
            }} />
            <input type="text" placeholder='Enter Your Phone' onChange={(event) => {
                setUserPhone(event.target.value)
            }} />
        </div>
    )
}

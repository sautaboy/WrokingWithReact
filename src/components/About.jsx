import React from 'react'
import { useContext } from 'react'

// Impoerting Data From UserDataSigUp Using SUeContext
import { UserDataSignUp } from '../App'


export default function About() {
    const { userName, userEmail, userPhone, userPassword } = useContext(UserDataSignUp)
    return (
        <div className='aboutPage'>
            <h1>Your Information Is Stored Here</h1>
            <p>Name: {userName}</p>
            <p>Email: {userEmail}</p>
            <p>Phone: {userPhone}</p>
            <p>Password: {userPassword}</p>
        </div>
    )
}

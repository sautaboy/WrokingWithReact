import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UseContext'
export default function Login() {
    const { userName, userEmail, userPhone } = useContext(AppContext)
    return (
        <div>
            <h1>Name:{userName}</h1>
            <h1>Email:{userEmail}</h1>
            <h1>Phone:{userPhone}</h1>
        </div>
    )
}

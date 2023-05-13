import React from 'react'

import { useContext, useState } from 'react'
import { UserDataSignUp } from '../App'

export default function SignUp() {
    const { setUserEmail, setUserPassword, setUserName, setUserPhone } = useContext(UserDataSignUp)

    const [newUserName, setNewUserName] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")
    const [newUserPhone, setNewUserPhone] = useState("")
    const [newUserPassword, setNewUserPassword] = useState("")
    return (
        <div className='signUpContainer'>
            <h1>Welcome To Sign Up Page.</h1>
            <div className="infoField">
                <label htmlFor="name">
                    <span>Name</span>
                    <input type="text" placeholder='Enter Your Name ' onChange={(event) => {
                        setNewUserName(event.target.value)
                    }} />
                </label>

                <label htmlFor="name">
                    <span>Email</span>
                    <input type="email" placeholder='Enter Your Email ' onChange={(event) => {
                        setNewUserEmail(event.target.value)
                    }} />
                </label>

                <label htmlFor="name">
                    <span>Phone</span>
                    <input type="text" placeholder='Enter Your Phone Number ' onChange={(event) => {
                        setNewUserPhone(event.target.value)
                    }} />
                </label>

                <label htmlFor="name">
                    <span>Password</span>
                    <input type="password" placeholder='Enter Your Password ' onChange={(event) => {
                        setNewUserPassword(event.target.value)
                    }} />
                </label>
                <label htmlFor="submit">
                    <button onClick={() => {
                        setUserEmail(newUserEmail)
                        setUserPassword(newUserPassword)
                        setUserName(newUserName)
                        setUserPhone(newUserPhone)
                        setNewUserName(" ")
                    }}>Sign Up</button>
                </label>
            </div>
        </div>
    )
}

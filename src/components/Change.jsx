import React, { useState } from 'react'
import { UserData } from '../App'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
export default function Change() {
    const { setContact, setEmail, setName, setPassword } = useContext(UserData)


    const [newName, setNewName] = useState("")
    const [newContact, setNewContact] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const updateUserData = () => {
        setName(newName)
        setContact(newContact)
        setEmail(newEmail)
        setPassword(newPassword)
    }
    return (
        <div>


            <h1>Login Page</h1>
            <label htmlFor="name">
                Name: <input required type="text" placeholder='Enter Your Name' onChange={(event) => {
                    setNewName(event.target.value)
                }} />
            </label>
            <label htmlFor="contact">
                Contact: <input required type="text" placeholder='Enter Your Contact' onChange={(event) => {
                    setNewContact(event.target.value)
                }} />
            </label>
            <label htmlFor="email">
                Email: <input required type="text" placeholder='Enter Your Email' onChange={(event) => {
                    setNewEmail(event.target.value)
                }} />
            </label>
            <label htmlFor="password">
                Password: <input required type="text" placeholder='Enter Your Password' onChange={(event) => {
                    setNewPassword(event.target.value)
                }} />
            </label>
            
            <NavLink to="/">
                <button onClick={updateUserData}>Submit</button>
            </NavLink>

        </div>
    )
}

import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import Login from './Login'
import SignUp from './SignUp'


export const AppContext = createContext(null)
export default function UseContext() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")


    return (
        <AppContext.Provider value={{ userName, setUserName, userEmail, setUserEmail, userPhone, setUserPhone }}>
            <SignUp />
            <Login />
        </AppContext.Provider>
    )
}

import React, { createContext, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Importing All The Components Here
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

// Importing Css
import './App.css'

// exporting SigUp Data
export const UserDataSignUp = createContext();
function App() {

  const [userName, setUserName] = useState("yourName")
  const [userEmail, setUserEmail] = useState("yourEmail@gmail.com")
  const [userPhone, setUserPhone] = useState("yourPhoneNumber")
  const [userPassword, setUserPassword] = useState("yourPassword")
  return (
    <div>
      <UserDataSignUp.Provider value={{ userName, setUserName, userPhone, setUserPhone, userEmail, setUserEmail, userPassword, setUserPassword }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserDataSignUp.Provider>
    </div>
  )
}

export default App

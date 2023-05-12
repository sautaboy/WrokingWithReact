import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Usecontext from './components/Usecontext';
import Usereducer from './components/Usereducer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UseState from './components/UseState';
import Change from './components/Change';


export const UserData = createContext()
export default function App() {

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <UserData.Provider value={{
        name,
        contact, email, password, setContact, setEmail, setName, setPassword
      }}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/usereducer' element={<Usereducer />} />
            <Route path='/usecontext' element={<Usecontext />} />
            <Route path='/usestate' element={<UseState />} />
            <Route path='/change' element={<Change />} />
          </Routes>
        </BrowserRouter>
      </UserData.Provider>


    </div>
  )
}


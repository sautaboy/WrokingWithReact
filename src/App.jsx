import React, { createContext, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


// Importing Query Here
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'



// Importing All The Components Here
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'

// Importing Css
import './App.css'
import Catfact from './components/Catfact'

// exporting SigUp Data
export const UserDataSignUp = createContext();
function App() {

  // Here is the Query Clint 
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })



  const [userName, setUserName] = useState("yourName")
  const [userEmail, setUserEmail] = useState("yourEmail@gmail.com")
  const [userPhone, setUserPhone] = useState("yourPhoneNumber")
  const [userPassword, setUserPassword] = useState("yourPassword")
  return (
    <div>
      <QueryClientProvider client={client}>

        <UserDataSignUp.Provider value={{ userName, setUserName, userPhone, setUserPhone, userEmail, setUserEmail, userPassword, setUserPassword }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path='/catfact' element={<Catfact />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </UserDataSignUp.Provider>
      </QueryClientProvider>

    </div>
  )
}

export default App

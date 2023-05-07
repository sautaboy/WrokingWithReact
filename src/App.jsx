import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Usecontext from './components/Usecontext';
import Usereducer from './components/Usereducer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UseState from './components/UseState';
import UseEffectHook from './components/UseEffectHook';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/usereducer' element={<Usereducer />} />
          <Route path='/usecontext' element={<Usecontext />} />
          <Route path='/usestate' element={<UseState />} />
          <Route path='useeffect' element={<UseEffectHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


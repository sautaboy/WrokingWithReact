import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='listItem'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/usestate">Use State</NavLink>
                <NavLink to="/useeffect">Use Effect</NavLink>
                <NavLink to="/usecontext">Use Context</NavLink>
                <NavLink to="/usereducer">Use Reducer</NavLink>
            </div>
        </div>
    )
}

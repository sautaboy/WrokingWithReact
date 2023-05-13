import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/">Home</NavLink >
                <NavLink to="/about">About</NavLink >
                <NavLink to="/signup">SignUp</NavLink >
                <NavLink to="/login">Login</NavLink >
            </div>
        </div>
    )
}

export default Navbar

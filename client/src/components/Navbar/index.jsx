import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.styles.css'

const Navbar = () => {
    return (
        <div id='Navbar'>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Navbar;
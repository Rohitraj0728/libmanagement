import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
// import Login from '../auth/Login'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        NITS Library
                    </Link>

                </div>
                <ul className="navbar-links">
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </nav >
        </div >
    )
}

export default Navbar

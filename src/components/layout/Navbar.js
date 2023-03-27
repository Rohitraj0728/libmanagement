import React from 'react'
import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div class="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#">Signup</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link, Navigate } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing" >
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Welcome to NITS Library</h1>
                    <p className="lead">
                        E-Library of NIT Silchar where one can issue the book of their need and access it without any
                        physical process.
                    </p>
                    <div className="buttons">
                        <Link to="/studentRegister" className="btn btn-primary">Are you a student?</Link>
                        <Link to="/adminRegister" className="btn btn-light">Admin?</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Landing;
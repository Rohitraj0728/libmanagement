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
                        <a href="signin_student.html" className="btn btn-primary">Are you a student?</a>
                        <a href="signin_admin.html" className="btn btn-light">Admin?</a>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Landing;
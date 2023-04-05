import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Register_admin = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password2: ''
    });

    const { name, email, mobile, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Password do not match');
        } else {

            console.log(formData);
        }
    };
    return (
        <section className="container">
            <h1 className="large text-primary">Admin Sign Up</h1>
            <p className="lead"><i class="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder=" Email Address" name="email" onChange={onChange} required />

                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Mobile No."
                        name="mobile"
                        minLength="10"
                        maxLength="10"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength={6}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength={6}
                        onChange={onChange}
                        required
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section >
    )
}

export default Register_admin

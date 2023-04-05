import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Register_student = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        Scholar_Id: '',
        password: '',
        password2: '',
        file: ''
    });

    const { name, email, mobile, Scholar_Id, password, password2, file } = formData;

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
            <h1 className="large text-primary">Student Sign Up</h1>
            <p className="lead"><i class="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Institute Email Address" name="email" required />

                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Mobile No."
                        name="mobile"
                        maxLength={10}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Scholar Id"
                        name="Scholar_Id"
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
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="file"
                        placeholder="Upload your college ID card"
                        name="file"
                        required
                    />
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link >
            </p>
        </section >
    )
};

export default Register_student

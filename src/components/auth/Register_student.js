import React from 'react'
const Register_student = () => {
    return (
        <section class="container">
            <h1 class="large text-primary">Student Sign Up</h1>
            <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
            <form class="form" action="create-profile.html">
                <div class="form-group">
                    <input type="text" placeholder="Name" name="name" required />
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Institute Email Address" name="email" required />

                </div>
                <div class="form-group">
                    <input
                        type="number"
                        placeholder="Mobile No."
                        name="mobile number"
                        maxLength={10}
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="number"
                        placeholder="Scholar Id"
                        name="Scholar Id"
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength={6}
                        required
                    />
                </div>

                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength={6}
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="file"
                        placeholder="Upload your college ID card"
                        name="file"
                        required
                    />
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </form>
            <p class="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </section>
    )
};

export default Register_student

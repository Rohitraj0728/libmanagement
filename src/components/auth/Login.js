import React from 'react'

const Login = () => {
    return (
        <section class="container">
            <h1 class="large text-primary">Admin/Students Sign In</h1>
            <p class="lead"><i class="fas fa-user"></i> Sign Into Your Account</p>
            <form class="form" action="create-profile.html">
                <div class="form-group">
                    <input type="email" placeholder=" Email Address" name="email" required />

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


                <input type="submit" class="btn btn-primary" value="Login" />
            </form>

        </section>
    )
}

export default Login

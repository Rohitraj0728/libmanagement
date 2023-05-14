import React from 'react'

const Login = () => {
    return (
        <section className="container">
            <h1 className="large text-light">Admin/Students Sign In</h1>
            <p className="lead"><i class="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" action="create-profile.html">
                <div className="form-group">
                    <input type="email" placeholder=" Email Address" name="email" required />

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


                <input type="submit" className="btn btn-danger" value="Login" />
            </form>

        </section>
    )
}

export default Login
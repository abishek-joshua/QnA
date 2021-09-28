import React  from "react";
import './SignIn.css';

const SignIn = () => {
    return(
        <div className="main">
            <div className="SignIn">
                <h1>Sign In</h1>
                <div className="formDetails">
                    <strong>Email</strong> <input className="email-box" type="email" placeholder="xyz@student.tce.edu"></input>
                    <strong>Password</strong> <input className="password-box" type="password"></input>
                    <button className="SignInButton">SignIn</button>
                    <div className="reg-and-forget">
                        <p className="register">Register</p>
                        <p className="forgot-password">Forgot Password?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SignIn;
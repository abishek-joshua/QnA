import React from "react";
import './Register.css';

const Register = () => {
    return (
        <div className="main">
            <div className="Register">
                <h1>Register</h1>
                <div className="formDetails">
                    <strong>Email</strong> <input className="email-box" type="email" placeholder="xyz@student.tce.edu"></input>
                    <strong>Password</strong> <input className="password-box" type="password"></input>
                    <button className="register-button">Register</button>
                    <div className="sign-in-main">
                        <p className="sign-in">Already have an account?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
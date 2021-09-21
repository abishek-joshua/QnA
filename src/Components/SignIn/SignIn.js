import React  from "react";
import './SignIn.css';

const SignIn = () => {
    return(
        <div className="SignIn">
            <h1>Sign In</h1>
            <div className="formDetails">
                <strong>Email</strong> <input className="email-box" type="email" placeholder="xyz@student.tce.edu"></input>
                <strong>Password</strong> <input className="password-box" type="password"></input>
                <button className="SignInButton">SignIn</button>
            </div>
        </div>
    );
}


export default SignIn;
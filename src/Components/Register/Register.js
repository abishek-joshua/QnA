import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
class Register extends React.Component {
    render(){
        return (
            <div className="register-box">
                <h1>Register</h1>
                    <label for="email-box">Email</label> 
                        <input id="email-box" type="email" placeholder="xyz@student.tce.edu"></input>

                    <label for="password-box">Password</label>
                         <input id="password-box" type="password"></input>
                    
                    <label for="confirm-password-box">confirm Password</label>
                     <input id="confirm-password-box" type="password"></input>

                    <button>Register</button>

                    <Link to='/signin'>Already have an account?</Link>
            </div>
    );
    }
}

export default Register;
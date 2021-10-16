import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
class Register extends React.Component {
    render() {
        return (
            <div className="register-box">
                <h1>Register</h1>
                <label for="roll-number-box">Roll Number</label>
                <input id="roll-number-box" type="email" placeholder="61000"></input>

                <label for="email-box">Email</label>
                <input id="email-box" type="email" placeholder="xyz@student.tce.edu"></input>

                <label for="password-box">Password</label>
                <input id="password-box" type="password"></input>

                <button className="submit-button" >Register</button>

                <Link to='/signin'>Already have an account?</Link>
            </div>
        );
    }
}

export default Register;
import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { Redirect, withRouter } from 'react-router';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }
    }
    onClickRegister = () => {
        let roll_number = document.getElementById('roll-number-box').value;
        let email = document.getElementById('email-box').value;
        let password = document.getElementById('password-box').value;
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: roll_number,
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res === "Succesfully Registered. Login NOW") {
                    this.setState({ registered: true })
                }
                else {
                    alert("Registration Unsuccessful.Please try again")
                }
            })
            .catch(console.log)
    }

    render() {
        return (
            this.state.registered ?
                <Redirect to="/signin" /> :
                <div className="register-box">
                    < h1 > Register</h1 >
                    <label htmlFor="roll-number-box">Roll Number</label>
                    <input
                        id="roll-number-box"
                        type="text"
                        placeholder="61000">
                    </input>

                    <label htmlFor="email-box">Email</label>
                    <input
                        id="email-box"
                        type="email"
                        placeholder="xyz@student.tce.edu">
                    </input>

                    <label htmlFor="password-box">Password</label>
                    <input id="password-box" type="password"></input>

                    <button onClick={this.onClickRegister} className="submit-button" >Register</button>

                    <Link to='/signin'>Already have an account?</Link>
                </div >
        );
    }
}

export default withRouter(Register);
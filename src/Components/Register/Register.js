import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
class Register extends React.Component {
    onClickRegister = () => {
        let roll_number = document.getElementById('roll-number-box').value;
        let email = document.getElementById('email-box').value;
        let password = document.getElementById('password-box').value;
        fetch('http://localhost:3000/register', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                roll_number: roll_number,
                email: email,
                password: password
            })
        } )
        .then( res => res.json())
        .then( res => {
            if(res === "Succesfully Registered. Login NOW"){
                this.props.history.push('/signin');
            }
            else {
                alert("Registration Unsuccessful.Please try again")
            }
        })
        .catch(console.log)
   }

    render() {
        return (
            <div className="register-box">
                <h1>Register</h1>
                <label for="roll-number-box">Roll Number</label>
                <input
                    id="roll-number-box"
                    type="email"
                    placeholder="61000">
                </input>

                <label for="email-box">Email</label>
                <input
                    id="email-box"
                    type="email"
                    placeholder="xyz@student.tce.edu">
                </input>

                <label for="password-box">Password</label>
                <input id="password-box" type="password"></input>

                <button onClick = {this.onClickRegister} className="submit-button" >Register</button>

                <Link to='/signin'>Already have an account?</Link>
            </div>
        );
    }
}

export default withRouter(Register);
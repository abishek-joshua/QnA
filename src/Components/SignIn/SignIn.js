import React from "react";
import { withRouter } from 'react-router';
import './Signin.css';
import { Link } from "react-router-dom";
class Signin extends React.Component {
    onClickSignin = () => {
        let roll_number = document.getElementById('roll-number-box').value;
        let password = document.getElementById('password-box').value;
        fetch('http://localhost:3000/signin', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                roll_number: roll_number,
                password: password
            })
        } )
        .then( res => res.json())
        .then( res => {
            if(res === "Error Signing In..."){
                window.alert("Invalid Credentials")
            }
            else {
                this.props.login(res[0]);
                this.props.history.push('/');
            }
        })
        .catch(console.log)

        
    }
    render() {
        return (
            <div className="signin-box">
                <h1>Sign In</h1>
                <label for="roll-number-box">Roll Number</label>
                <input
                    id="roll-number-box"
                    type="text">
                </input>

                <label for="password-box">Password</label>
                <input id="password-box" type="password"></input>

                <button className="submit-button" onClick={this.onClickSignin}>
                    Signin
                </button>

                <Link to='/register'>
                    create account?
                </Link>
            </div>
        );
    }
}

export default withRouter(Signin);
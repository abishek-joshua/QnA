import React from "react";
import { withRouter } from 'react-router';
import './Signin.css';
import { Link } from "react-router-dom";
class Signin extends React.Component {
    onClickSignin = () => {
        this.props.login({ roll_number: 70007 });
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="signin-box">
                <h1>Sign In</h1>
                <label for="email-box">Email</label>
                <input
                    id="email-box"
                    type="email"
                    placeholder="xyz@student.tce.edu">
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
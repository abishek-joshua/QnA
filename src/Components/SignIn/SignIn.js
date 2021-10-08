import React  from "react";
import './SignIn.css';
import { Link } from "react-router-dom";
class SignIn extends React.Component {
    render(){
        return(
            <div className="sign-in">
                <h1>Sign In</h1>
                    <label for="email-box">Email</label> 
                        <input id="email-box" type="email" placeholder="xyz@student.tce.edu"></input>

                    <label for="password-box">Password</label>
                         <input id="password-box" type="password"></input>
                    
                     <button>Signin</button>
                     <Link to='/register'>create account?</Link>
            </div>
    );
    }   
}


export default SignIn;
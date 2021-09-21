import React  from "react";
import './SignIn.css';

const SignIn = () => {
    return(
        <div className="SignIn">
            <h1>Sign In</h1>
            <div className="formDetails">
                <strong>Email</strong> <input type="email" placeholder="xyz@student.tce.edu"></input><br></br><br></br>
                <strong>Password</strong> <input type="password"></input><br></br><br></br>
                <div className='formButton'>
                    <button>SignIn</button>
                </div>
            </div>
        </div>
    );
}


export default SignIn;
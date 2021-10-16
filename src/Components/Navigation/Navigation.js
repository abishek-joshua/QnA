import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom';
import logout from "../../images/logout.svg";
import ask from "../../images/ask.svg";
import home from "../../images/home.svg"
import profile from "../../images/profile.svg";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="sticky-nav">
                <Link to='/'>
                    <div className="app-title">QnA</div>
                </Link>
                <div className="nav-right">
                    <Link to='/'>
                        <div className="icon-button-desc">
                            <img className="icon-button" alt="profile" src={home} />
                            Home
                        </div>
                    </Link>

                    <Link to='/ask'>
                        <div className="icon-button-desc">
                            <img className="icon-button" alt="ask" src={ask} />
                            Ask
                        </div>
                    </Link>

                    <Link to='/signin'>
                        <div className="icon-button-desc">
                            <img className="icon-button" alt="logout" src={logout} />
                            Logout
                        </div>
                    </Link>

                    <Link to='/profile/:id'>
                        <div className="icon-button-desc">
                            <img className="icon-button" alt="profile" src={profile} />
                            61236
                        </div>
                    </Link>


                </div>
            </nav>
        );
    }
}

export default Navigation;
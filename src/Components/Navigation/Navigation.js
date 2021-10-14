import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom';
import logout from "../../images/logout.svg";
import menu from "../../images/menu.svg";
import ask from "../../images/ask.svg";
import home from "../../images/home.svg";

class Navigation extends React.Component {
    render() {
        return (
            <>
                <div className="sticky-nav">
                    <button><img src={menu} alt="menu" /></button>
                    <nav>
                        <Link to='/'><img alt="home" src={home} /></Link>
                        <Link to='/ask'> <img alt="ask" src={ask} /></Link>
                        <Link to='/signin'><img alt="logout" src={logout} /></Link>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navigation;
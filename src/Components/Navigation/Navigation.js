import React from "react";
import "./Navigation.css";
import SearchBox from '../SearchBox/SearchBox';
import Logo from "../../images/Logo.svg";
import Profile from "../../images/profile.svg";
class Navigation extends React.Component{
    render() {
        return(
            <div>
                <nav className="navigation">
                    <img  className = "logo" alt="Logo" src={Logo}/>
                        <SearchBox/>
                        <div className="qna-title">QnA</div>
                    <img  className = "profile" alt="Logo" src={Profile}/>
                </nav>
            </div>

        );
    }
}

export default Navigation;
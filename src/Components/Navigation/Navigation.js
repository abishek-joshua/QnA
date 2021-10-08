import React from "react";
import "./Navigation.css";
import SearchBox from '../SearchBox/SearchBox';
import profile from "../../images/profile.svg";
import ask from "../../images/ask.svg";
import home from "../../images/home.svg";

class Navigation extends React.Component{
    render() {
        return(
                <nav className="navigation">
                    <div className="qna-title">QnA</div>
                    <SearchBox/>
                    <div className="nav-right">
                        <div className="ask-comp">
                        <img  className = "ask" alt="ask" src={ask}/>
                            Ask
                        </div>
                        <img  className = "home" alt="home" src={home}/>
                        <img  className = "profile" alt="profile" src={profile}/>
                    </div>
                </nav>
        );
    }
}

export default Navigation;
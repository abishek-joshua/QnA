import React from "react";
import "./Navigation.css"


class Navigation extends React.Component{
    render() {
        return(
            <div>
                <nav className="navigation">
                    <img  className = "logo" alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mz0GpE-47vyrrBOrJllU7ko4RBb48fGyXQ&usqp=CAU"/>
                    <p className="sign-out">Sign Out</p>
                </nav>
            </div>

        );
    }
}

export default Navigation;
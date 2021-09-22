import React from 'react';
import "./SearchBox.css";
import SearchIcon from "../../images/search-icon.png";
class SearchBox extends React.Component{
    render(){
    return (
        <div className="search-box">
            <input type="search" placeholder="Search..."className="search-bar"/>
            <img className="search-icon" src={SearchIcon} alt="search"/>
        </div>
    );
    }
};

export default SearchBox;
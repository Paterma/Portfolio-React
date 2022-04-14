import React, { useState } from 'react';
import scrollTo from "gatsby-plugin-smoothscroll"
import '../Styles/Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from 'react-router-dom';


function Navigation(props) {
const {pages=[], setPage, page} = props
const [activeNav, setActiveNav] = useState("#")

    return (
<nav className="navbar navbar-expand-lg justify-content-center">
    <div className="">
    
        <ul className="navbar-nav align-items-center">
       <a 
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
       ><li className="nav-item">
            <button onClick={() => setPage(pages[0])}>{pages[0]}</button>
        </li></a>
        <a 
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
        ><li className="nav-item">
        <button onClick={() => setPage(pages[1])}>{pages[1]}</button>
        </li></a>
        <li className="nav-item">
            <button onClick={() => setPage(pages[2])}>{pages[2]}</button>
        </li>
        </ul>
    </div>
</nav> 

);
}


export default Navigation;

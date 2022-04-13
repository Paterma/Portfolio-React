import React, { useEffect} from 'react';
import scrollTo from "gatsby-plugin-smoothscroll"
import '../Styles/Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Me from '../Pictures/Me.jpg'
import { useLocation, useNavigate } from 'react-router-dom';

// // Get the container element
// var btnContainer = document.getElementById("nav-item");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("button");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
// btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
// });
// }


function Navigation(props) {
const {pages=[], setPage, page} = props

    return (
<nav class="navbar navbar-expand-lg justify-content-center">
     {/* <a class="navbar-brand" id='myName'>Maria Paterno</a> <br></br> */}
    <div class="">
    
        <ul class="navbar-nav align-items-center">
        <li class="nav-item">
            <button onClick={() => setPage(pages[0])}>{pages[0]}</button>
        </li>
        <li class="nav-item">
        <button onClick={() => setPage(pages[1])}>{pages[1]}</button>
        </li>
        <li class="nav-item">
            <button onClick={() => setPage(pages[2])}>{pages[2]}</button>
        </li>
        </ul>
    </div>
    <h1>Maria Paterno</h1>
    <div class="col-6">
        <img src={Me} class="img-fluid" id='profile' alt="Profile Pic"/>
    </div>
</nav> 

    );
    }


export default Navigation;
{/* <nav class="navbar navbar-expand-lg justify-content-center">
{/* <a class="navbar-brand" id='myName'>Maria Paterno</a> <br></br> */}
{/* <div class="">

   <ul class="navbar-nav align-items-center">
   <li class="nav-item">
       <button onClick={() => scrollTo("#header")}>About</button>
       
   </li>
   <li class="nav-item">
   <button onClick={() =>scrollTo("#work")}>Work</button>
   </li>
   <li class="nav-item">
       <button onClick={() => scrollTo("#contact")}>Contact Me</button>
   </li>
   </ul>
</div>
<div>Maria Paterno</div>
</nav>  */} 








{/* <div className="section">
<div className="container">
<div className="navbar-wrapper">
    <div
    role="button"
    onClick={() => scrollTo("#home")}
    className="name"
    tabIndex={0}
    >
    Maria Paterno
    </div>
    <div className="links-wrapper">
    <button onClick={() =>scrollTo("#work")}>Work</button>
    <button onClick={() => scrollTo("#about")}>About</button>
    <button onClick={() => scrollTo("#contact")}>Contact Me</button>
    </div>
</div>
</div>
</div> */}

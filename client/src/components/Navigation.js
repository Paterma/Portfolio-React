import React from 'react';
import scrollTo from "gatsby-plugin-smoothscroll"
import '../Styles/Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
    return (
 <nav class="navbar navbar-expand-lg justify-content-center">
     {/* <a class="navbar-brand" id='myName'>Maria Paterno</a> <br></br> */}
    <div class="">
    
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

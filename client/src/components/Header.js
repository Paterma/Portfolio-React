import React from 'react';
import { useParams } from 'react-router-dom';
// Here we are importing a CSS file as a dependency
import '../Styles/Header.css';
import Me from '../Pictures/Me.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



function Header() {
return (

    <div  class="row justify-content-around div"> 
    <h1>Maria Paterno</h1>
    <div class="col-8">
        <img src={Me} class="img-fluid" id='profile' alt="Profile Pic"/>
    </div> 
<div id="header"><p>
Hello, and welcome to my portfolio! My name is Maria Paterno, and I'm currently attending a coding bootcamp at the University of Denver. I don't have any background in web prior to this; but I'm diving head first into the coding world. I enjoy the design aspect of coding and embrace the freedom to be creative. The purpose of this portfolio is to showcase my creations throughtout this course. Below you will see current examples of the work I have done so far- including this portfolio- and a little bit about myself.</p>
</div>
</div>
);
}

export default Header;

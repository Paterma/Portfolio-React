import React from 'react';

// Here we are importing a CSS file as a dependency
import '../Styles/Header.css';
import Me from '../Styles/Me.jpg'
import "bootstrap/dist/css/bootstrap.min.css";


function Header() {
return (
    <div  class="row justify-content-around div"> 
    <h1>Maria Paterno</h1>
    <div class="col-4">
        <img src={Me} class="img-fluid" id='profile' alt="Profile Pic"/>
    </div>
<div id="header"><p>
Hello, and welcome to my portfolio! My name is Maria Paterno, and I'm currently attending a coding bootcamp at the University of Denver. I don't have any background in web prior to this; but I'm diving head first into the coding world, and I'll be a pro by the time I'm done. The purpose of this portfolio is to showcase my creations throughtout this course. Below you will see current examples of the work I have done so far- including this portfolio- and a little bit about yours truly.</p>
</div>
</div>
);
}

export default Header;

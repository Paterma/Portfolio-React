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
Welcome to my portfolio! My name is Maria Paterno, and I'm currently attending a coding bootcamp at the University of Denver. I come from an extensive background in sales; but was eager for a change that sparked passion. This new role I'm taking on allows me to express my creativity, have the freedom to grow and explore different avenues, and continue to learn and be challenged in a field that is continuously changing. Everyday I'm striving to become everything I've ever dreamed of being; and taking small steps to become better as a web developer, and better as an individual.</p>
</div>
</div>
);
}

export default Header;

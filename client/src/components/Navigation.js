import React from 'react';
import '../Styles/Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
    return (
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#aboutMe">About Me</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Contact-Me">Contact Me</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Work">Projects</a>
        </li>
        </ul>
    </div>
</nav>

    );
    }


export default Navigation;

import React from 'react';
import '../Styles/Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';


function Footer(){
    return (
<footer id="footer">
<ul class="nav justify-content-center">
    <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/maria-paterno-b4a0271b5/" target="_blank"> <BsLinkedin/> </a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="mailto:mariapaterno7@gmail.com"><AiOutlineMail/></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="https://github.com/Paterma" target="_blank"><BsGithub/></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="https://docs.google.com/document/d/1lrr9xi5yAKFavVbg0Czarp1l27SDLGmPn29Z3JxPxpg/export?format=pdf" download="Paterno-Resume" target="_blank" rel="noreferrer"><FiDownload/></a>
    </li>
</ul>
</footer>  
)}


export default Footer;


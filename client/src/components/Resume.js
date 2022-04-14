import React from 'react';
import '../Styles/Resume.css';

function Resume() {
    return (
        <div id="resume" className="container">
        <div className="row">
       <div className="col-sm-12 col-md-4 lowerBoxes">
        <h3>My Resume</h3> 
         <a href="https://docs.google.com/document/d/1lrr9xi5yAKFavVbg0Czarp1l27SDLGmPn29Z3JxPxpg/edit#heading=h.miiyt1y6sl7g" target="_blank">
         <img src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/Organizational%20and%20Employee%20Development/jobsearch_d7ycuh.jpg" className="img-fluid" alt="Resume"/></a>
    </div>
    <div className="col-sm-12 col-md-4 lowerBoxes">
        <h3> My GitHub</h3>
         <a href="https://github.com/Paterma" target="_blank">
         <img src="https://t.ctcdn.com.br/JyYOtyrVhIK_AagtBY2lKWT4otg=/135x0:1858x971/512x288/smart/filters:format(webp)/i329956.jpeg" className="img-fluid" alt="GitHub"/></a>
       </div>
       <div className="col-sm-12 col-md-4 lowerBoxes">
        <h3> About Me</h3>
         <a href="https://paterma.github.io/prework-about-me/" target="_blank">
         <img src="https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2014/04/400x400-merida-brave-1280x720.png" className="img-fluid" alt="About Me"/></a>
       </div>
    </div> <br>
    </br>
    <br>
    </br>
<div id='skills'>
    <h2>SKILLS</h2>
    <br></br>
HTML/CSS
<div id="header">
<div class="container">
  <div class="skills html">95%</div>
</div>

JavaScript/jQuery
<div class="container">
  <div class="skills css">75%</div>
</div>

React
<div class="container">
  <div class="skills js">70%</div>
</div>

MongoDB/MySQL
<div class="container">
  <div class="skills php">65%</div>
</div>

Handlebars
<div class="container">
  <div class="skills mongo">60%</div>
</div>
</div>
</div> </div>
);
}

export default Resume;
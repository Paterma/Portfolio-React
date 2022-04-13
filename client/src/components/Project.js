import React from 'react';
// Here we are importing a CSS file as a dependency
import '../Styles/Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Mountain from '../Styles/mountain-ex.png'
import Weather from '../Styles/weather-ex.png'
import Planner from '../Styles/planner2-ex.PNG'
import AllPain from '../Styles/project2-ex.png'
import PasswordGen from '../Styles/Password-G-Screenshot-cropped.png'
import Quiz from '../Styles/quiz-ex.png'





function Project() {
    return (
    
        <div id="work" class="container">
        <div class="row">

        <div class="col-sm-12 col-md-4 lowerBoxes">
        <h3> Mountain Madness</h3>
            <a href="https://paterma.github.io/Bug-Spray/" target="_blank">
            <img src={Mountain} class="img-fluid" alt="Project Photo"/></a>
            <a class="nav-item" href="https://github.com/Paterma/Bug-Spray" target="_blank"> (Repo)</a> <br></br>
        My first project! My team and I built an app to check the weather, snowfall, and road conditions at 5 top ski resorts in Colorado. 
        </div>

        <div class="col-sm-12 col-md-4 lowerBoxes">
        <h3>  Weather Dashboard</h3>
            <a href="https://paterma.github.io/Homework-Weather-Dashboard/" target="_blank">
            <img src={Weather} class="img-fluid" alt="Weather"/></a>
            <a class="nav-item" href="https://github.com/Paterma/Homework-Weather-Dashboard" target="_blank">(Repo)</a> <br></br>
            See the 5 day forecast in any city!
            </div>
        
        <div class="col-sm-12 col-md-4 lowerBoxes">
        <h3> Work-Day Planner</h3>
            <a href="https://paterma.github.io/Homework-Work-Day-Scheduler/" target="_blank">
            <img src={Planner} class="img-fluid" alt="Planner"/></a>
            <a class="nav-item" href="https://github.com/Paterma/Homework-Work-Day-Scheduler" target="_blank">(Repo)</a><br></br>
            A simple planner to help organize your day.
            </div>
            <div class="col-sm-12 col-md-4 lowerBoxes">
<h3>  All Pain, No Grain</h3>
    <a href="https://gentle-everglades-97970.herokuapp.com/" target="_blank">
    <img src={AllPain} class="img-fluid" alt="Project Photo"/></a>
    <a class="nav-item" href="https://github.com/alexgeis/All-Pain-No-Gain" target="_blank">(Repo)</a> <br></br>
    My second project! My team and I built a full-stack app that allows users to login/logout to a health tracking calendar.
</div>

<div class="col-sm-12 col-md-4 lowerBoxes">
<h3>JavaScript Quiz</h3>
    <a href="https://paterma.github.io/Homework-Quiz/" target="_blank">
    <img src={Quiz} class="img-fluid" alt="Weather"/></a>
    <a class="nav-item" href="https://github.com/Paterma/Homework-Quiz" target="_blank">(Repo)</a> <br></br>
    A short quiz about JavaScript that will deduct time if you answer incorrectly!
</div>


<div class="col-sm-12 col-md-4 lowerBoxes">
<h3> Password Generator</h3>
    <a href="https://paterma.github.io/Password-Generator/" target="_blank">
    <img src={PasswordGen} class="img-fluid" alt="Planner"/></a>
    <a class="nav-item" href="https://github.com/Paterma/Password-Generator" target="_blank">(Repo)</a><br></br>
  A random password generator based on your choice of characters. 
  </div>
  <div class="col-sm-12 col-md-4 lowerBoxes">
   <h3> About Me</h3>
    <a href="https://paterma.github.io/prework-about-me/" target="_blank">
    <img src="https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2014/04/400x400-merida-brave-1280x720.png" class="img-fluid" alt="About Me"/></a>
  </div>

  <div class="col-sm-12 col-md-4 lowerBoxes">
   <h3> My GitHub</h3>
    <a href="https://github.com/Paterma" target="_blank">
    <img src="https://t.ctcdn.com.br/JyYOtyrVhIK_AagtBY2lKWT4otg=/135x0:1858x971/512x288/smart/filters:format(webp)/i329956.jpeg" class="img-fluid" alt="GitHub"/></a>
  </div>

  <div class="col-sm-12 col-md-4 lowerBoxes">
   <h3>My Resume</h3> 
    <a href="https://docs.google.com/document/d/1lrr9xi5yAKFavVbg0Czarp1l27SDLGmPn29Z3JxPxpg/edit#heading=h.miiyt1y6sl7g" target="_blank">
    <img src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/Organizational%20and%20Employee%20Development/jobsearch_d7ycuh.jpg" class="img-fluid" alt="Resume"/></a>
  </div>


            </div>
            </div>

            
            

          
          
         
);
}

export default Project;

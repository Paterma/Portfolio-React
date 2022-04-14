import React, { useState } from 'react'
import '../Styles/ContactForm.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import validator from 'validator'


function Contact() { 
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  


    return (
        <form id='contact'>
              <div className="contact-form" >
        <label for="name">Name</label>
        <input type="text" className="form-control" placeholder="Bruce Wayne" />
    </div>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
          onChange={(e) => validateEmail(e)}></input> <br />
          <span style={{
            color: 'green',
          }}>{emailError}</span>
        </div>
  
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="How did you get so awesome?" rows="3"></textarea>
        </div>
        <button type="submit">Sumbit</button>
      </form>
    );
};

export default Contact;
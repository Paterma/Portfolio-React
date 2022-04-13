import React, { useState } from 'react'
import '../Styles/ContactForm.css'
import "bootstrap/dist/css/bootstrap.min.css";




function Contact() { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    return (
     
        <form id='contact'>
              <div className="contact-form" >
        <label for="name">Name</label>
        <input type="text" className="form-control" placeholder="Bruce Wayne" />
    </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
   
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="How did you get so awesome?" rows="3"></textarea>
        </div>
        <button type="submit">Sumbit</button>
      </form>
    );
};

export default Contact;
import './contact.css'
import React from 'react';
import ContacForm from '..//../components/ContactForm/index'



function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-info'>
          <h2> Check me out!</h2>
          <p1> Email: k.kierepka.a@gmail.com</p1>
          <p1> (or you can use form below!)</p1>
          <p2>Mobile: 07930997665</p2>
          <div className='links'>
            <a href='https://www.linkedin.com/in/klaudia-kierepka' target='blank' className='link'>LinkedIn</a>
            <a href='https://github.com/klaudia102' target='blank' className='link' >GitHub</a>
            <a href='./Klaudia Kierepka-CV.pdf' target='blank' className='link'>Download my CV</a>
          </div>
        </div>
        
        <ContacForm />
        
      </div>
    </>
  );
}

export default Contact;

import './style.css'
import React from 'react'
import emailjs from 'emailjs-com';
// import emailjs from 'emailjs/browser'

function ContactForm() {

    const SERVICE_ID = "service_73giv99";
    const TEMPLATE_ID = "template_4mtjolb";
    const PUBLIC_KEY = "SglSW3ofcWnqBYNB3";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert('Message has been sent!')
            }, (error) => {
                console.log(error.text);
                alert('Something gone wrong! Try again!')
            });
        e.target.reset()
    };
    return (
        <form class="formContainer form" onSubmit={handleOnSubmit}>
            <div className="mb-3 container-name">
                <label for="exampleFormControlInput1 from_name" className="form-label">name</label>
                <input type="text" name="from_name" className="form-control email-input" id="exampleFormControlInput1 from_name" required />

            </div>
            <div className="mb-3 container-email">
                <label for="exampleFormControlInput1 from_email" className="form-label">email</label>
                <input type="email" name="from_email" className="form-control email-input" id="exampleFormControlInput1 from_email" required />
            </div>
            <div class="mb-3 container-massage" >
                <label for="exampleFormControlTextarea1 message" className="form-label">message</label> <br />
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" required></textarea>
            </div>
            <div className='button-container'>
                <button type="button submitt" className="btn sent_button">sent</button>
            </div>
        </form>
    )
}

export default ContactForm;
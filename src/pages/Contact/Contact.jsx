import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './contact.css'


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
            <a href='public/Klaudia Kierepka-CV.pdf' target='blank' className='link'>Download my CV</a>
          </div>
        </div>
        {/* contact input */}
        <div className='contact-form-container'>
          <form nameClass="row g-3 needs-validation " novalidate>

            <div nameClass="col-md-4 position-relative contact-form input1">
              <input type="text" nameClass="form-control" id="validationTooltip01" placeholder="Name" required />
              <div nameClass="valid-tooltip">
              </div>
            </div>
            <div nameClass="col-md-4 position-relative contact-form input1">
              <input type="text" nameClass="form-control" id="validationTooltip02" placeholder="Surname" required />
              <div nameClass="valid-tooltip">
              </div>
            </div>

            <div nameClass="col-md-4 position-relative contact-form input1">
              <div nameClass="input-group has-validation">
                <span nameClass="input-group-text" id="validationTooltipUsernamePrepend"></span>
                <input type="text" nameClass="form-control"
                  id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend"
                  placeholder="Email" required />
                <div nameClass="invalid-tooltip">
                </div>
              </div>

            </div>
            <form nameClass="was-validated">
              <div nameClass="mb-3">
                <textarea nameClass="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <div nameClass="invalid-feedback">
                </div>
              </div>
            </form>
            <div nameClass="col-12 button-container">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

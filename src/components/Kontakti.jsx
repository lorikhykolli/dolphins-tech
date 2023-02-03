import React from "react";
import Button from 'react-bootstrap/Button';
import "./Kontakti.css";


function Kontakti() { 
    return ( <div> 
    <section id="kontakti1">
    <div class="row"> 
    <div class="future-box col-lg-6"> 
    <h1>Contact Us</h1>
    <div class="fs-6 fw-light mb-2">Post your message below. We will get back to you ASAP</div>
    <form id="contact_form" name="contact_form" method="post">
        <div class="mb-5">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5"></textarea>
        </div>
        <div class="mb-5 row">
            <div class="col">
                <label>Your Name:</label>
                <input type="text" required maxlength="20" class="form-control" id="name" name="name"/>
            </div>
            <div class="col">
                <label for="email_addr">Your Email:</label>
                <input type="email" required maxlength="20" class="form-control" id="email_addr" name="email"
                    placeholder="name@example.com"/>
            </div>
        </div>
        <div class="d-grid">
        <Button variant="info">Shiko Shembuj</Button>{' '}
        </div>
    </form>
    </div>
    <div class="future-box col-lg-6">
      <h2>Bëj një hap përpara për t'u bërë një nga klientët tonë të suksesshëm</h2>
        <h2>Na kontaktoni per teknologjike që premtojnë suksesin tuaj. </h2>
         </div>
         </div>
    </section>
    </div> )
}; 


export default Kontakti;
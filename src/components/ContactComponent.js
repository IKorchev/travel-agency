import React from "react";
import "../App.css";

const ContactComponent = () => {
  return (
    <div class="container">
      <div class="row justify-content-around my-3">
        <h4 class="text-center mb-5">CONTACT US:</h4>
        <div class="col-lg-3">
          <h5 class="text-center">Use our contact form:</h5>
          <label for="input1" class="form-label">
            Your name
          </label>
          <input
            type="text"
            class="form-control"
            id="input1"
            placeholder="Name"></input>
          <label for="input1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="input1"
            placeholder="name@example.com"></input>
          <label for="ta1" class="form-label">
            Example textarea
          </label>
          <textarea class="form-control" id="ta1" rows="3"></textarea>
        </div>
        <div class="col-lg-3 my-2 text-center ">
          <h4>Chat with our team:</h4>
            <a class="contact-links mx-3 " href="##">
              <i class="fab fa-facebook-messenger"></i>
            </a>
            <a class="contact-links mx-3" href="##">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a class="contact-links mx-3" href="##">
              <i class="fas fa-phone"></i>
            </a>
            <a class="contact-links mx-3" href="##">
              <i class="fab fa-twitter"></i>
            </a>
            <div class="container my-3">
              <a class="" href="##">Terms and Conditions</a><br></br>
              <a class="" href="##">Privacy Policy</a>
            </div>
        </div>
        <div class="col-lg-3 my-2 text-center">
          <h4>Email us:</h4>
          <a href="##">info@travelagency.com</a>
        </div>
        
      </div>
    </div>
  );
};

export default ContactComponent;

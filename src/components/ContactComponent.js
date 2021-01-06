import React from "react";

const ContactComponent = () => {
  return (
    <div class="Container">
      <div class="row justify-content-around mb-5">
        <h4 class="text-center my-3">Contact us</h4>
        <div class="col-lg-2 mx-5">
          <h5 class="text-center">Contact form</h5>
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
        <div class="col-lg-2 mt-5 text-center">
          <h4>Email us:</h4>
          <a href="##">info@travelagency.com</a>
        </div>
        <div class="col-lg-2 mt-5 text-center">
          <h4>Chat with our team:</h4>
          <a href="##">info@travelagency.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

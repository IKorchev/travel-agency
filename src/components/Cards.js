import React from "react";
import NYC from "../assets/NY.jpg";
import Paris from "../assets/Paris.jpg";
import London from "../assets/London.jpg";
import Plane from "../assets/plane-solid.svg";
import Palm from "../assets/palm-tree.svg";
import Globe from "../assets/globe-americas-solid.svg";
import Hotel from "../assets/hotel-solid.svg";
import "../App.css";

const Cards = () => {
  return (
    <div class="container d-lg-flex justify-content-around">
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Paris}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Paris}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Paris}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export const CardsServices = () => {
  return (
    <div class="container d-lg-flex justify-content-around">
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Plane}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
     
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Hotel}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Globe}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card m-4 text-center">
        <h5 class="card-header text-center">London</h5>
        <div class="card-body text-center">
          <img class="card-img-top img-responsive" src={Plane}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

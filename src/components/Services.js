import React from "react"
import Globe from "../assets/globe-americas-solid.svg"
import Plane from "../assets/plane-solid.svg"
import Palm from "../assets/palm-tree.svg"
const services = [
  {
    img: Globe,
    title: "International",
    text: "Pick a place. We will find the best flight tickets for you.",
  },
  {
    img: Plane,
    title: "Cheap flight tickets",
    text: "If you find a cheaper fligh we will match the price!",
  },
  {
    img: Palm,
    title: "Unbelievable holidays",
    text: "We will take care of your flight and hotel. You just enjoy!",
  },
]

const ServicesCard = () => {
  return (
    <div class='row justify-content-center'>
      {services.map((service) => (
        <div class='col-md-2 card m-4 text-center'>
          <h5 class='card-header text-center'>{service.title}</h5>
          <div class='card-body text-center'>
            <img class='svg card-img-top' alt={service.title} src={service.img}></img>
            <h5 class='card-title mt-3'>{service.title}</h5>
            <p class='card-text'>{service.text}</p>
            <button class='btn btn-primary'>More info</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ServicesCard

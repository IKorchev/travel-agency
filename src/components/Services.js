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
    text: "If you find a cheaper flight we will match the price!",
  },
  {
    img: Palm,
    title: "Unbelievable holidays",
    text: "We will take care of your flight and hotel. You just enjoy!",
  },
]

const ServicesCard = () => {
  return (
    <div className='row justify-content-center gx-0'>
      {services.map((service) => (
        <div className='col-lg-2 card m-4 text-center' key={service.title}>
          <h5 className='card-header text-center'>{service.title}</h5>
          <div className='card-body text-center'>
            <img className='svg card-img-top' alt={service.title} src={service.img}></img>
            <h5 className='card-title mt-3'>{service.title}</h5>
            <p className='card-text'>{service.text}</p>
            <button className='btn'>More info</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ServicesCard

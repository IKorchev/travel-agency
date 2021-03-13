import React from "react"
import NYC from "../assets/NY.jpg"
import Paris from "../assets/Paris.jpg"
import London from "../assets/London.jpg"

const pictures = [
  {
    img: NYC,
    city: "New York",
    title: "New York City",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus
    auctor, rutrum libero gravida, mattis enim. Fusce faucibus mauris ac felis
    tincidunt dapibus.`,
  },
  {
    img: Paris,
    city: "Paris",
    title: "Travel to some the most special places!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus
    auctor, rutrum libero gravida, mattis enim. Fusce faucibus mauris ac felis
    tincidunt dapibus.`,
  },
  {
    img: London,
    city: "London",
    title: "Travel to some the most special places!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus
    auctor, rutrum libero gravida, mattis enim. Fusce faucibus mauris ac felis
    tincidunt dapibus.`,
  },
]

const Cards = () => {
  return (
    <div className='row gx-0 justify-content-around align-items-center'>
      {pictures.map((item) => (
        <div className='col-lg-3 my-2 card text-center' key={item.city}>
          <h5 className='card-header text-center'>{item.city}</h5>
          <div className='card-body text-center'>
            <img
              className='card-img-top'
              alt={item.city + " skyline"}
              src={item.img}></img>
            <h5 className='my-3 card-title'>{item.title}</h5>
            <p className='card-text'>{item.text}</p>
            <button className='btn'>Buy tickets</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Cards

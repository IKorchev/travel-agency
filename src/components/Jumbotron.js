import React from "react"

const Jumbotron = ({ title, text, button, id }) => {
  return (
    <div className='jumbotron text-center' id={id}>
      <div className='container'>
        <h1 className='display-3 fw-1 h1 mt-5 text-white '>{title}</h1>
        <p className='my-3 text-white'>{text}</p>
        <button className='mt-3 btn btn-primary'>{button}</button>
      </div>
    </div>
  )
}

export default Jumbotron

import React from "react"

const Jumbotron = ({ title, text, button, id}) => {
  return (
    <div className='jumbotron text-center' id={id}>
      <div className='container'>
        <h1 className='h1 text-white'>{title}</h1>
        <p className='lead text-white mt-5'>{text}</p>
      </div>
      <div className='container'>
        <button className='btn btn-primary mx-5'>{button}</button>
      </div>
    </div>
  )
}

export default Jumbotron

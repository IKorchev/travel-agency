import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  return (
    <nav className='navbar py-1 navbar-light bg-light fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          Travel Agency
        </a>
        <nav className='nav nav-pills nav-fill'>
          <a
            className='nav-link active'
            data-bs-toggle='pill'
            data-bs-target='#home'
            href='#home'>
            Home
          </a>
          <a className='nav-link' data-bs-toggle='pill' href='#services'>
            Services
          </a>
          <a className='nav-link' data-bs-toggle='pill' href='#contact'>
            Contact
          </a>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar

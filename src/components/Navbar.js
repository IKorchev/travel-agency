import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  return (
    <nav className='navbar py-1 navbar-light bg-light fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#home'>
          Travel Agency
        </a>
        <nav className='nav nav-pills nav-fill'>
          <a className='nav-link active' aria-current='page' href='#home'>
            Home
          </a>
          <a className='nav-link text-dark' href='#services'>
            Services
          </a>
          <a className='nav-link text-dark' href='#contact'>
            Contact
          </a>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar

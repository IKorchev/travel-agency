import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar py-1 navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Travel Agency
        </a>
        <div className="navbar">
          <a className="nav-link py-1 text-dark" href="#">
            Home
          </a>
          <a className="nav-link py-1 text-dark" href="#services">
            Services
          </a>
          <a className="nav-link py-1 text-dark" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

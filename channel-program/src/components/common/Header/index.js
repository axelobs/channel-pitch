import React from 'react';

import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href><Link to="/">CHANNEL PROGRAM</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href><Link to="/">HOME</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href><Link to="/register">ABOUT</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href><Link to="/register">PITCH</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href><Link to="/register">EPISODES</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href><Link to="/register">CONTACT</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href><Link to="/register">Register</Link></a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header;
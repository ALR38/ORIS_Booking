import React from "react";
import '../styles/index.css'
import '../styles/reset1.css'
import '../styles/variables.css'


function Header(){
    return(
        <header className="header">
        <img className="header__logo" src="../icons/logo.svg" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">About Us</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Popular Destinations</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Our Packages</a>
            </li>
            <li className="nav__item">
              <a className="nav__link">Help</a>
            </li>
          </ul>
          <button className="nav__button">Sign In</button>
        </nav>
      </header>
    );
}

export default Header;
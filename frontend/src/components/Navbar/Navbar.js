import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarComponent() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon="home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/upcoming">
            <FontAwesomeIcon icon="film" /> Upcoming Movies
          </Link>
        </li>
        <li>
          <Link to="/top-rated">
            <FontAwesomeIcon icon="star" /> Top Rated Movies
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon="search" /> Search
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon="info-circle" /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon="address-card" /> Contact
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon="user" /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarComponent;

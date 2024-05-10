import React from 'react';
import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className= "container">
      <ul>
        <li>
          <Link >
            Home
          </Link>
        </li>
        <li>
          <Link >
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link >
            About us
          </Link>
        </li>
        <li>
          <Link >
            Campus
          </Link>
        </li>
        <li>
          <Link >
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="btn">
            Contact us
          </Link>
        </li>
        <li>
          <NavLink to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
    );
}

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">
            Venues
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

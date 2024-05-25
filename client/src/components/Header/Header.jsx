import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/about", label: "About" },
  { path: "/signup", label: "Registration" },
  { path: "/login", label: "Login" },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='header'>
      <div className='container navbar navbar-expand-lg navbar-light'>
        <div className='navbar-logo-container d-flex align-items-center'>
          <img
            className='navbar-logo-image mr-3'
            src='logo.svg'
            alt='logo'
            width='30'
            height='30'
          />
          <Link className='navbar-brand text-white' to='/'>
            IdeaHub
          </Link>
        </div>
        <nav className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            {navLinks.map((link) => (
              <li
                className={`nav-item ${
                  pathname === link.path ? "navbar-nav-active" : ""
                }`}
                key={link.label}
              >
                <Link
                  className='nav-link text-white'
                  exact={true}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const toggleLanguage = () => {
    let currentPath = window.location.pathname;

    // Remove trailing slash if it exists
    if (currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1);
    }

    if (currentPath.includes('/fr')) {
      const newPath = currentPath.replace('/fr', '');
      window.location.replace(newPath);
    } else {
      window.location.replace(`${currentPath}/fr`);
    }
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="TrendTide Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="brand-name">TrendTide</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about-us">About us</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="language-toggle" onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faGlobe} className="language-icon" />
          FR
        </button>
        <Link to="/contact">
          <button className="contact-button">Contact us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

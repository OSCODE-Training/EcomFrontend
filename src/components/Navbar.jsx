import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isEducationMenuOpen, setEducationMenuOpen] = useState(false);
  const [isBusinessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [isAccessoriesMenuOpen, setAccessoriesMenuOpen] = useState(false);

  // Toggle dropdown visibility
  const handleEducationMouseEnter = () => setEducationMenuOpen(true);
  const handleEducationMouseLeave = () => setEducationMenuOpen(false);

  const handleBusinessMouseEnter = () => setBusinessMenuOpen(true);
  const handleBusinessMouseLeave = () => setBusinessMenuOpen(false);

  const handleAccessoriesMenuEnter = () => setAccessoriesMenuOpen(true);
  const handleAccessoriesMenuLeave = () => setAccessoriesMenuOpen(false); // Corrected "flase" to "false"

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navbar Menu */}
        <ul className="navbar-menu">
          <li className="dropdown">
            <Link to="/" className="dropdown-toggle">
              Home
            </Link>
          </li>

          {/* Education Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={handleEducationMouseEnter}
            onMouseLeave={handleEducationMouseLeave}
          >
            <Link to="/education" className="dropdown-toggle">
              Education
            </Link>
            {isEducationMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/education/flat-panel">Flat Panel</Link>
                </li>
                <li>
                  <Link to="/education/video-wall">Video Wall</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Business Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={handleBusinessMouseEnter}
            onMouseLeave={handleBusinessMouseLeave}
          >
            <Link to="/business" className="dropdown-toggle">
              Business
            </Link>
            {isBusinessMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/business/video-conferencing">Video Conferencing</Link>
                </li>
                <li>
                  <Link to="/business/audio-conferencing">Audio Conferencing</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Accessories Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={handleAccessoriesMenuEnter}
            onMouseLeave={handleAccessoriesMenuLeave}
          >
            <Link to="/accessories" className="dropdown-toggle">
              Accessories
            </Link>
            {isAccessoriesMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/accessories/video-conferencing">Video Conferencing</Link>
                </li>
                <li>
                  <Link to="/accessories/audio-conferencing">Audio Conferencing</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contact Us */}
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

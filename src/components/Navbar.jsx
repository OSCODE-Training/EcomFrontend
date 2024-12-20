import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isEducationMenuOpen, setEducationMenuOpen] = useState(false);
  const [isBusinessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [isAccessoriesMenuOpen, setAccessoriesMenuOpen] = useState(false);

  const handleEducationMouseEnter = () => setEducationMenuOpen(true);
  const handleEducationMouseLeave = () => setEducationMenuOpen(false);

  const handleBusinessMouseEnter = () => setBusinessMenuOpen(true);
  const handleBusinessMouseLeave = () => setBusinessMenuOpen(false);

  const handleAccessoriesMenuEnter = () => setAccessoriesMenuOpen(true);
  const handleAccessoriesMenuLeave = () => setAccessoriesMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src="src/assets/Screenshot 2024-12-08 081538.png" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navbar Menu */}
        <ul className="navbar-menu">
          <li className="dropdown">
            <Link to="/" className="dropdown-toggle">
              Home
            </Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={handleEducationMouseEnter}
            onMouseLeave={handleEducationMouseLeave}
          >
            <Link to="/" className="dropdown-toggle">
              Education
            </Link>
            {isEducationMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/education/interactive-flat-panel">Interactive Flat Panel</Link>
                </li>
                <li>
                  <Link to="/education/led-video-wall">LED Video Wall</Link>
                </li>
                <li>
                  <Link to="/education/ptz-camera">PTZ Camera</Link>
                </li>
                <li>
                  <Link to="/education/digital-signages">Digital Signages</Link>
                </li>
                <li>
                  <Link to="/education/digital-podium">Digital Podium</Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={handleBusinessMouseEnter}
            onMouseLeave={handleBusinessMouseLeave}
          >
            <Link to="/" className="dropdown-toggle">
              Business
            </Link>
            {isBusinessMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/business/interactive-flat-panel">Interactive Flat Panel</Link>
                </li>
                <li>
                  <Link to="/business/wireless-presentation-device">Wireless Presentation Device</Link>
                </li>
                <li>
                  <Link to="/business/led-video-wall">LED Video Wall</Link>
                </li>
                <li>
                  <Link to="/business/digital-signages">Digital Signages</Link>
                </li>
                <li>
                  <Link to="/business/ptz-camera">PTZ Camera</Link>
                </li>
                <li>
                  <Link to="/business/video-conferencing-system">Video Conferencing System</Link>
                </li>
                <li>
                  <Link to="/business/audio-conferencing-system">Audio Conferencing System</Link>
                </li>
                <li>
                  <Link to="/business/digital-podium">Digital Podium</Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={handleAccessoriesMenuEnter}
            onMouseLeave={handleAccessoriesMenuLeave}
          >
            <Link to="/" className="dropdown-toggle">
              Accessories
            </Link>
            {isAccessoriesMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/accessories/ops-pc-module">OPS PC Module</Link>
                </li>
                <li>
                  <Link to="/accessories/document-camera">Document Camera</Link>
                </li>
                <li>
                  <Link to="/accessories/stands-mounts">Stands & Mounts</Link>
                </li>
                <li>
                  <Link to="/accessories/tripod">Tripod</Link>
                </li>
                <li>
                  <Link to="/accessories/software">Software</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>

        {/* Login Button */}
        <div className="login-button-container">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

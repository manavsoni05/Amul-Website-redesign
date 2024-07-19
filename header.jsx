import React, { useState } from 'react';
import './Navbar.css'; // Make sure to create and import your CSS file for styling

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./Amul_Logo.png" alt="Logo" />
        </div>
        <div className="navbar-heading">
          <h1 id="page-heading">AI Tools</h1>
        </div>
        <div className="hamburger-menu">&#9776;</div>
        <div className="navbar-menu">
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="#about-section">About Us</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
            <li><a href="./Apps.html">Apps</a></li>
            <li><a href="./AI-Tools.html">AI Tools</a></li>
            <li><a href="https://www.amuldairy.com/plant_gcmmf.php">Plant Details</a></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <a href="#" className="dropbtn">Registration</a>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="https://digi.amuldairy.com/vendor/reg.php">Customer Registration</a>
                  <a href="https://digi.amuldairy.com/suppreg.php">Supplier Registration</a>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-social">
          <a href="https://www.facebook.com/DairyAmul"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/amul_india/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/@AmulTheTasteofIndia"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://twitter.com/x/migrate?tok=eyJlIjoiL0RhaXJ5QW11bCIsInQiOjE3MTY5NjM1MzJ9aKZnfUQ0wnU4suN9ovDkEA%3D%3D"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

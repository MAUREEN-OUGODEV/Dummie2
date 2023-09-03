import React, { useState,  } from "react";
import "./nav.css";

export const Navigation = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  


  return (
    <nav id="menu"className={`navbar ${menuOpen ? 'open' : ''}`} >
      <div className="container">
        <div className="flex-container">
          <div className="image-container">
            <img src="img/image/logo.png" alt="Your" />
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>



          
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
              <li>
                <a
                  href="header"
                  className="page-scroll"
                 
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="page-scroll"
                 
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="page-scroll"
                  
                >
                  Values
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="page-scroll"
                
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="page-scroll"
                 
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="page-scroll"
                
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    </nav>
  );
};

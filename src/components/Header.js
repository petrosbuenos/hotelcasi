import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>StayVerso Reviews</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Strona główna</Link></li>
              <li><Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Recenzje</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>O nas</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</Link></li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
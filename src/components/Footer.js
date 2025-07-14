import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Clear Stay Reviews</h3>
            <p>Twoje niezawodne źródło szczerych recenzji hoteli i kurortów na całym świecie.</p>
          </div>
          
          <div className="footer-section">
            <h4>Szybkie linki</h4>
            <ul>
              <li><Link to="/">Strona główna</Link></li>
              <li><Link to="/reviews">Recenzje</Link></li>
              <li><Link to="/about">O nas</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kategorie</h4>
            <ul>
              <li><a href="#luxury">Luksusowe hotele</a></li>
              <li><a href="#budget">Opcje budżetowe</a></li>
              <li><a href="#resorts">Kurorty</a></li>
              <li><a href="#apartments">Apartamenty</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Email: info@clearstayreviews.com</p>
            <p>Telefon: +1 (555) 123-4567</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Clear Stay Reviews. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StayVerso Reviews</h3>
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
            <p>Email: info@stayversoreviews.com</p>
            <p>Telefon: +1 (555) 123-4567</p>
          </div>
          
          <div className="footer-section">
            <h4>Prawne</h4>
            <ul>
              <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
              <li><a href="/regulamin">Regulamin</a></li>
              <li><Link to="/cookies">Polityka cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="social-media-section">
          <h3>Śledź nas</h3>
          <p>Bądź na bieżąco z najnowszymi wiadomościami i aktualizacjami</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <span className="icon">📘</span>
              <span className="label">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <span className="icon">🐦</span>
              <span className="label">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <span className="icon">📷</span>
              <span className="label">Instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <span className="icon">💼</span>
              <span className="label">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 StayVerso Reviews. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
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
        
        <div className="footer-content">
          <div className="footer-main-section">
            <div className="footer-brand">
              <h3>StayVerso Reviews</h3>
              <p>Twoje niezawodne źródło szczerych recenzji hoteli i kurortów na całym świecie. Odkryj najlepsze hotele z kasynami i zaplanuj niezapomnianą podróż.</p>
            </div>
            
            <div className="footer-links-section">
              <div className="footer-links-group">
                <h4>Szybkie linki</h4>
                <ul>
                  <li><Link to="/">Strona główna</Link></li>
                  <li><Link to="/reviews">Recenzje</Link></li>
                  <li><Link to="/about">O nas</Link></li>
                  <li><Link to="/contact">Kontakt</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-group">
                <h4>Prawne</h4>
                <ul>
                  <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
                  <li><Link to="/regulamin">Regulamin</Link></li>
                  <li><Link to="/cookies">Polityka cookies</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-contact">
              <h4>Kontakt</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>kontakt@stayversoreviews.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+48 691 769 487</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>ul. Schulza Brunona 88, Warszawa</span>
                </div>
              </div>
            </div>
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
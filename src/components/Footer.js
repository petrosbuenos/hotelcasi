import React from 'react';
import { Link } from 'react-router-dom';
import findahelplineLogo from '../img/prefooter/findahelpline-logo.svg';
import age18Logo from '../img/prefooter/18.png';
import gambleawareLogo from '../img/prefooter/gambleaware.org.png';
import podatkiLogo from '../img/prefooter/1009287.png';
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

        <div className="responsible-gaming-section">
          <h3>ODPOWIEDZIALNA GRA</h3>
          <div className="responsible-gaming-content">
            <p>Ta strona internetowa jest przeznaczona wyłącznie dla użytkowników w wieku 18 lat i starszych. Zawarte na niej treści mają charakter wyłącznie informacyjny i dotyczą lądowych kasyn licencjonowanych w Polsce. Nie promujemy ani nie oferujemy bezpośrednio usług hazardu online.</p>
            
            <p>Hazard może uzależniać. Prosimy o odpowiedzialną grę. Jeśli Ty lub ktoś z Twoich bliskich ma problem z hazardem, dostępna jest pomoc. Istnieją krajowe i lokalne organizacje oferujące bezpłatne i poufne wsparcie oraz leczenie uzależnień od hazardu.</p>
            
            <p>W Polsce dostępna jest pomoc dla osób uzależnionych od hazardu. Można skontaktować się z Ogólnopolską Linią Pomocy dla Osób Uzależnionych od Hazardu pod numerem telefonu <strong>+48 801 889 880</strong> (połączenie anonimowe i bezpłatne).</p>
            
            <p>Dodatkowo, więcej informacji i wsparcia można znaleźć na stronie:<br />
            👉 <a href="https://findahelpline.com/countries/pl/topics/gambling" target="_blank" rel="noopener noreferrer">https://findahelpline.com/countries/pl/topics/gambling</a></p>
            
            <p>Ta strona prezentuje wyłącznie kasyna lądowe posiadające koncesję, które działają legalnie na podstawie zezwoleń wydanych przez Ministerstwo Finansów Rzeczypospolitej Polskiej. Przykładowe obiekty to:</p>
            
            <ul className="casino-list">
              <li>Hotel Mieszko — Gorzów Wielkopolski</li>
              <li>Hotel Indigo — Warszawa</li>
              <li>City Park Hotel — Poznań</li>
            </ul>
            
            <p><strong>Uwaga:</strong> Wszystkie oferty, promocje lub informacje przedstawione na tej stronie mogą podlegać dodatkowym warunkom określonym przez poszczególnych operatorów kasyn. Zalecamy zapoznanie się z oficjalnymi stronami i regulaminem każdego z dostawców.</p>
            
            <p>Nie ponosimy odpowiedzialności za treści ani usługi stron trzecich.</p>
          </div>
          
          <div className="responsible-gaming-logos">
            <a href="https://findahelpline.com/countries/pl/topics/gambling" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={findahelplineLogo} alt="Find A Helpline" />
            </a>
            <a href="https://findahelpline.com/countries/pl/topics/gambling" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={age18Logo} alt="18+ Only" />
            </a>
            <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={gambleawareLogo} alt="GambleAware" />
            </a>
            <a href="https://www.podatki.gov.pl/media/10941/wykaz-obowiązujących-koncesji-na-kasyna-gry-wg-stanu-na-10-07-2025.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src={podatkiLogo} alt="Ministerstwo Finansów" />
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
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи користувач вже дав згоду на cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    // Можна додати посилання на політику конфіденційності
    window.open('/privacy-policy', '_blank');
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <span className="cookie-icon">🍪</span>
          <div className="cookie-text-content">
            <p>
              Ми використовуємо cookies для покращення вашого досвіду на нашому сайті. 
              Продовжуючи використовувати сайт, ви погоджуєтесь з нашим використанням cookies.
            </p>
            <button className="cookie-learn-more" onClick={handleLearnMore}>
              Дізнатися більше
            </button>
          </div>
        </div>
        <div className="cookie-consent-buttons">
          <button className="cookie-btn cookie-btn-decline" onClick={handleDecline}>
            Відхилити
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Прийняти
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 
import React, { useState, useEffect } from 'react';
import './AgeVerification.css';

const AgeVerification = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи користувач вже підтвердив свій вік
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setShowModal(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem('ageVerified', 'true');
    setShowModal(false);
  };

  const handleNo = () => {
    // Перенаправляємо на безпечну сторінку або показуємо повідомлення
    window.location.href = 'https://www.google.com';
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <div className="age-verification-icon">🛡️</div>
        <h2 className="age-verification-title">Age Verification Required</h2>
        <p className="age-verification-text">
          You must be 18 or older to access this casino hotel website.
        </p>
        <p className="age-verification-question">Are you 18 or older?</p>
        
        <div className="age-verification-buttons">
          <button className="age-verification-btn age-verification-btn-yes" onClick={handleYes}>
            <span className="btn-icon">✓</span>
            YES, I AM OVER 18
          </button>
          <button className="age-verification-btn age-verification-btn-no" onClick={handleNo}>
            <span className="btn-icon">✗</span>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification; 
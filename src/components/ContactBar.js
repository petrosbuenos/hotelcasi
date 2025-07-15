import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-content">
          <div className="contact-item">
            <svg className="icon" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v0.01L12 13 2 4.01V4zm0 2.236l10 8.764 10-8.764V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6.236z"></path>
            </svg>
            <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a>
          </div>
          <div className="contact-item">
            <svg className="icon" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.06-.24 11.05 11.05 0 003.47.56 1 1 0 011 1v3.5a1 1 0 01-1 1A17.94 17.94 0 012 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.47a1.003 1.003 0 01-.24 1.06l-2.2 2.2z"></path>
            </svg>
            <a href="tel:+48222065411">+48 22 206 54 11</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar; 
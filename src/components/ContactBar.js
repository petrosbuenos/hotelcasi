import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="contact-icon">📧</i>
            <span>kontakt@stayversoreviews.com</span>
          </div>
          <div className="contact-item">
            <i className="contact-icon">📞</i>
            <span>+48 22 206 54 11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar; 
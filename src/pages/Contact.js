import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут була б логіка відправки форми
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "kontakt@stayversoreviews.com",
      description: "Napisz do nas email"
    },
    {
      icon: "📞",
      title: "Telefon",
      details: "+48 691 769 487",
      description: "Dzwoń do nas od 9:00 do 18:00"
    },
    {
      icon: "📍",
      title: "Adres",
      details: "ul. Schulza Brunona 88, Warszawa",
      description: "Nasze biuro znajduje się w centrum miasta"
    }
  ];

  const faqItems = [
    {
      question: "Jak mogę dodać recenzję hotelu?",
      answer: "Możesz napisać do nas email lub użyć formularza kontaktowego na tej stronie. Przejrzymy Twoją recenzję i dodamy ją na stronę."
    },
    {
      question: "Czy mogę zaproponować nowy hotel do dodania?",
      answer: "Tak, zawsze jesteśmy otwarci na nowe propozycje! Wyślij nam informacje o hotelu, a dodamy go do naszej bazy danych."
    },
    {
      question: "Jak często aktualizowane są informacje na stronie?",
      answer: "Aktualizujemy informacje co tydzień, w tym ceny, dostępność i nowe recenzje od gości."
    },
    {
      question: "Czy mogę otrzymać konsultację dotyczącą wyboru hotelu?",
      answer: "Oczywiście! Nasz zespół ekspertów jest gotowy pomóc Ci w wyborze idealnego hotelu na Twoją podróż."
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Skontaktuj się z nami</h1>
          <p>
            Masz pytania lub sugestie? Zawsze chętnie Cię słuchamy! 
            Napisz do nas, a odpowiemy najszybciej jak to możliwe.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <section className="contact-info-section">
            <h2>Informacje kontaktowe</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p className="contact-details">{info.details}</p>
                  <p className="contact-description">{info.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Napisz do nas</h2>
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Dziękujemy za Twoją wiadomość!</h3>
                <p>Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.</p>
                <button 
                  className="btn" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Napisz ponownie
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Imię *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Temat *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Wybierz temat</option>
                    <option value="general">Ogólne pytanie</option>
                    <option value="review">Dodaj recenzję</option>
                    <option value="suggestion">Sugestia</option>
                    <option value="partnership">Współpraca</option>
                    <option value="technical">Wsparcie techniczne</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Wiadomość *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Opisz swoje pytanie lub sugestię..."
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2>Często zadawane pytania</h2>
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>


        </div>
      </div>
    </div>
  );
};

export default Contact; 
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      id: 1,
      title: "Szczere recenzje",
      description: "Zapewniamy tylko prawdziwe i obiektywne recenzje od rzeczywistych gości.",
      icon: "⭐"
    },
    {
      id: 2,
      title: "Szczegółowe informacje",
      description: "Pełne informacje o hotelach, w tym zdjęcia, ceny i udogodnienia.",
      icon: "📋"
    },
    {
      id: 3,
      title: "Aktualne ceny",
      description: "Regularnie aktualizujemy informacje o cenach i dostępności pokoi.",
      icon: "💰"
    },
    {
      id: 4,
      title: "Wygodne wyszukiwanie",
      description: "Łatwo znajdź idealny hotel za pomocą naszych filtrów.",
      icon: "🔍"
    },
    {
      id: 5,
      title: "Eksperckie porady",
      description: "Porady od doświadczonych podróżników i ekspertów turystycznych.",
      icon: "💡"
    },
    {
      id: 6,
      title: "Bezpieczne rezerwacje",
      description: "Bezpośrednie linki do oficjalnych stron hoteli dla bezpiecznych rezerwacji.",
      icon: "🔒"
    }
  ];

  const popularHotels = [
    {
      id: 1,
      name: "Grand Hotel Europe",
      location: "Paryż, Francja",
      rating: 4.8,
      price: "€200",
      image: "🏨"
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Barcelona, Hiszpania",
      rating: 4.6,
      price: "€180",
      image: "🌊"
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Szwajcarskie Alpy",
      rating: 4.9,
      price: "€300",
      image: "🏔️"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Znajdź idealny hotel na swój wypoczynek</h1>
          <p>
            StayVerso Reviews - Twój niezawodny pomocnik w wyborze najlepszych hoteli i kurortów. 
            Czytaj szczere recenzje od rzeczywistych gości i planuj niezapomnianą podróż.
          </p>
          <div className="hero-buttons">
            <Link to="/reviews" className="btn">Przeglądaj recenzje</Link>
            <Link to="/about" className="btn btn-secondary">Dowiedz się więcej</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Dlaczego wybierają nas?</h2>
          <p className="section-subtitle">
            Zapewniamy najlepszy serwis do wyszukiwania i wyboru hoteli na całym świecie
          </p>
          
          <div className="features-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Hotels Section */}
      <section className="popular-hotels-section">
        <div className="container">
          <h2 className="section-title">Popularne hotele</h2>
          <p className="section-subtitle">
            Najbardziej popularne hotele według recenzji naszych użytkowników
          </p>
          
          <div className="hotels-grid">
            {popularHotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">{hotel.image}</div>
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p className="hotel-location">{hotel.location}</p>
                  <div className="hotel-rating">
                    <span className="stars">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
                    <span className="rating-text">{hotel.rating}/5</span>
                  </div>
                  <p className="hotel-price">od {hotel.price}/noc</p>
                  <Link to={`/reviews/${hotel.id}`} className="btn">Szczegóły</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/reviews" className="btn btn-secondary">Przeglądaj wszystkie hotele</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Gotowi planować swoją podróż?</h2>
          <p>Zacznij od przeglądu naszych szczegółowych recenzji i znajdź idealny hotel</p>
          <Link to="/reviews" className="btn">Rozpocznij wyszukiwanie</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
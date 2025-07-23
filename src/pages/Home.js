import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../img/main.jpeg';
// Import partner logos
import luxstyleLogo from '../img/partners/luxstyle.png';
import euroTravelLogo from '../img/partners/euro-travel.png';
import globalFinanceLogo from '../img/partners/global-finance.png';
import alphaTechLogo from '../img/partners/alpha-tech.png';
import skyloopLogo from '../img/partners/skyloop.png';
import vivacommerceLogo from '../img/partners/vivacommerce.png';
import northdataLogo from '../img/partners/northdata.png';
import auroraSolutionsLogo from '../img/partners/aurora-solutions.png';
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
      name: "Hotel Mieszko",
      location: "ul. Kosynierów Gdyńskich 82, 66-400 Gorzów Wielkopolski",
      rating: 4.7,
      price: "350 zł",
      image: "/HotelMieszko.jpg",
      website: "https://hotel-mieszko.pl"
    },
    {
      id: 2,
      name: "Indigo Warsaw",
      location: "ul. Smolna 40, 00-375 Warszawa",
      rating: 4.8,
      price: "450 zł",
      image: "/IndigoWarsaw.jpg",
      website: "https://indigowarsaw.com/"
    },
    {
      id: 3,
      name: "City Park Hotel",
      location: "ul. Wyspiańskiego 26a, 60-751 Poznań",
      rating: 4.6,
      price: "380 zł",
      image: "/CityParkHotel.jpg",
      website: "https://cityparkhotel.pl/pl/"
    }
  ];

  const partners = [
    { id: 1, name: "LuxStyle", logo: luxstyleLogo, website: "#" },
    { id: 2, name: "Euro Travel", logo: euroTravelLogo, website: "#" },
    { id: 3, name: "Global Finance", logo: globalFinanceLogo, website: "#" },
    { id: 4, name: "Alpha Tech", logo: alphaTechLogo, website: "#" },
    { id: 5, name: "SkyLoop", logo: skyloopLogo, website: "#" },
    { id: 6, name: "VivaCommerce", logo: vivacommerceLogo, website: "#" },
    { id: 7, name: "NorthData", logo: northdataLogo, website: "#" },
    { id: 8, name: "Aurora Solutions", logo: auroraSolutionsLogo, website: "#" }
  ];

  // Split partners into groups of 4
  const partnerGroups = [];
  for (let i = 0; i < partners.length; i += 4) {
    partnerGroups.push(partners.slice(i, i + 4));
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={mainImage} alt="Hotel Casino Background" className="hero-background" />
        <div className="hero-overlay">
          <div className="container">
            <h1>Witamy w Stay Verso Reviews</h1>
            <p>
              Twoim zaufanym przewodniku po najlepszych hotelach z kasynami. Przeczytaj szczere opinie prawdziwych gości i zaplanuj niezapomnianą podróż.
            </p>
            <div className="hero-buttons">
              <Link to="/reviews" className="btn">Przeglądaj hotele</Link>
              <Link to="/about" className="btn btn-secondary">Dowiedz się więcej</Link>
            </div>
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
                <div className="hotel-image">
                  <img src={hotel.image} alt={hotel.name} />
                </div>
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p className="hotel-location">{hotel.location}</p>
                  <div className="hotel-rating">
                    <span className="stars">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
                    <span className="rating-text">{hotel.rating}/5</span>
                  </div>
                  <p className="hotel-price">od {hotel.price}/noc</p>
                  <div className="hotel-buttons">
                    <Link to={`/reviews/${hotel.id}`} className="btn">Szczegóły</Link>
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Strona hotelu</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/reviews" className="btn btn-secondary">Przeglądaj wszystkie hotele</Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Nasi partnerzy</h2>
          <p className="section-subtitle">
            Zaufali nam liderzy różnych branż
          </p>
          
          <div className="partners-grid">
            {partnerGroups.map((group, index) => (
              <div key={index} className="partner-group">
                {group.map(partner => (
                  <div key={partner.id} className="partner-card">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <img src={partner.logo} alt={partner.name} />
                    </a>
                  </div>
                ))}
              </div>
            ))}
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
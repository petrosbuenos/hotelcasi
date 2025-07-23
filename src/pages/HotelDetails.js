import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './HotelDetails.css';

const HotelDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    // Прокручуємо сторінку вгору при завантаженні
    window.scrollTo(0, 0);
  }, [id]);

  const hotelsData = {
    1: {
      name: "Hotel Mieszko",
      location: "ul. Kosynierów Gdyńskich 82, 66-400 Gorzów Wielkopolski",
      rating: 4.7,
      price: "350 zł",
      image: "/HotelMieszko.jpg",
      website: "https://hotel-mieszko.pl",
      coordinates: {
        lat: 52.7328,
        lng: 15.2386
      },
      category: "3-gwiazdkowy hotel biznesowy",
      checkIn: "14:00",
      checkOut: "12:00",
      description: "Hotel Mieszko to nowoczesny obiekt położony w centrum Gorzowa Wielkopolskiego, oferujący komfortowe zakwaterowanie zarówno dla turystów, jak i osób podróżujących służbowo.",
      features: [
        "Bezpłatne Wi-Fi",
        "Parking dla gości",
        "Restauracja",
        "Bar",
        "Centrum fitness",
        "Sala konferencyjna"
      ],
      rooms: [
        {
          type: "Pokój Standard",
          size: "20 m²",
          bed: "Łóżko podwójne lub dwa pojedyncze",
          price: "350 zł"
        },
        {
          type: "Pokój Superior",
          size: "25 m²", 
          bed: "Łóżko king-size",
          price: "450 zł"
        }
      ],
      nearby: [
        "Centrum miasta - 5 min pieszo",
        "Dworzec PKP - 10 min pieszo",
        "Park miejski - 3 min pieszo"
      ]
    },
    2: {
      name: "Indigo Warsaw",
      location: "ul. Smolna 40, 00-375 Warszawa",
      rating: 4.8,
      price: "450 zł",
      image: "/IndigoWarsaw.jpg",
      website: "https://indigowarsaw.com/",
      coordinates: {
        lat: 52.2297,
        lng: 21.0122
      },
      category: "4-gwiazdkowy hotel boutique",
      checkIn: "15:00",
      checkOut: "11:00",
      description: "Indigo Warsaw to elegancki hotel boutique w sercu Warszawy, łączący nowoczesny design z tradycyjną polską gościnnością. Idealny dla wymagających podróżników.",
      features: [
        "Bezpłatne Wi-Fi",
        "Restauracja",
        "Bar",
        "Spa i wellness",
        "Centrum fitness",
        "Sala konferencyjna"
      ],
      rooms: [
        {
          type: "Pokój Standard",
          size: "22 m²",
          bed: "Łóżko queen-size",
          price: "450 zł"
        },
        {
          type: "Pokój Deluxe",
          size: "28 m²",
          bed: "Łóżko king-size",
          price: "550 zł"
        }
      ],
      nearby: [
        "Stare Miasto - 10 min pieszo",
        "Pałac Kultury - 15 min pieszo",
        "Metro - 5 min pieszo"
      ]
    },
    3: {
      name: "City Park Hotel",
      location: "ul. Wyspiańskiego 26a, 60-751 Poznań",
      rating: 4.6,
      price: "380 zł",
      image: "/CityParkHotel.jpg",
      website: "https://cityparkhotel.pl/pl/",
      coordinates: {
        lat: 52.4064,
        lng: 16.9252
      },
      category: "4-gwiazdkowy hotel miejski",
      checkIn: "14:00",
      checkOut: "12:00",
      description: "City Park Hotel to nowoczesny hotel w centrum Poznania, oferujący komfortowe zakwaterowanie w pobliżu głównych atrakcji miasta i centrum biznesowego.",
      features: [
        "Bezpłatne Wi-Fi",
        "Parking podziemny",
        "Restauracja",
        "Bar",
        "Centrum fitness",
        "Sala konferencyjna"
      ],
      rooms: [
        {
          type: "Pokój Standard",
          size: "24 m²",
          bed: "Łóżko podwójne",
          price: "380 zł"
        },
        {
          type: "Pokój Executive",
          size: "30 m²",
          bed: "Łóżko king-size",
          price: "480 zł"
        }
      ],
      nearby: [
        "Stary Rynek - 8 min pieszo",
        "Centrum handlowe - 3 min pieszo",
        "Dworzec PKP - 15 min pieszo"
      ]
    },

  };

  const hotel = hotelsData[id];

  if (!hotel) {
    return (
      <div className="hotel-details">
        <div className="container">
          <h1>Hotel nie został znaleziony</h1>
          <Link to="/" className="btn">Powrót do strony głównej</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hotel-details">
      <div className="container">
        {/* Hero Section */}
        <div className="hotel-hero">
          <div className="hotel-hero-image">
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <div className="hotel-hero-content">
            <h1>{hotel.name}</h1>
            <p className="hotel-location">{hotel.location}</p>
            <div className="hotel-rating">
              <span className="stars">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
              <span className="rating-text">{hotel.rating}/5</span>
            </div>
            <p className="hotel-category">{hotel.category}</p>
            <div className="hotel-actions">
              <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="btn">
                Strona hotelu
              </a>
              <Link to="/" className="btn btn-secondary">
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="hotel-info-grid">
          <div className="hotel-description">
            <h2>O hotelu</h2>
            <p>{hotel.description}</p>
          </div>

          <div className="hotel-details-sidebar">
            <div className="hotel-card">
              <h3>Informacje praktyczne</h3>
              <ul>
                <li><strong>Check-in:</strong> od {hotel.checkIn}</li>
                <li><strong>Check-out:</strong> do {hotel.checkOut}</li>
                <li><strong>Cena od:</strong> {hotel.price}/noc</li>
              </ul>
            </div>

            <div className="hotel-card">
              <h3>Udogodnienia</h3>
              <ul>
                {hotel.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="rooms-section">
          <h2>Rodzaje pokoi</h2>
          <div className="rooms-grid">
            {hotel.rooms.map((room, index) => (
              <div key={index} className="room-card">
                <h3>{room.type}</h3>
                <ul>
                  <li><strong>Powierzchnia:</strong> {room.size}</li>
                  <li><strong>Łóżko:</strong> {room.bed}</li>
                  <li><strong>Cena:</strong> od {room.price}/noc</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="location-section">
          <h2>Lokalizacja i dostępność</h2>
          <div className="location-content">
            <div className="location-info">
              <p>
                {hotel.name} znajduje się w {hotel.location.split(',')[1]?.trim() || 'centrum miasta'}. 
                Dzięki tej lokalizacji jesteś w zasięgu spaceru od najważniejszych punktów miasta.
              </p>
              
              <h3>Jak dojechać?</h3>
              <div className="transport-info">
                <div className="transport-item">
                  <span className="transport-icon">🚆</span>
                  <span><strong>Dworzec PKP:</strong> 10-15 minut pieszo</span>
                </div>
                <div className="transport-item">
                  <span className="transport-icon">✈️</span>
                  <span><strong>Lotnisko:</strong> 20-30 minut samochodem</span>
                </div>
                <div className="transport-item">
                  <span className="transport-icon">🚇</span>
                  <span><strong>Komunikacja miejska:</strong> przystanki w pobliżu</span>
                </div>
                <div className="transport-item">
                  <span className="transport-icon">🚌</span>
                  <span><strong>Autobusy & tramwaje:</strong> kilka linii w promieniu 200 metrów</span>
                </div>
              </div>
              
              <p className="parking-info">
                Parking dostępny dla gości hotelowych (dodatkowa opłata). 
                Możliwość wynajmu samochodu lub roweru miejskiego w pobliżu.
              </p>
            </div>
            
            <div className="map-container">
              {id === "1" ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.25055596302423!2d15.230413243212894!3d52.73577117451645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47071f9eec38f6ab%3A0xb68b028b289bab5c!2sHotel%20Mieszko!5e1!3m2!1suk!2sua!4v1752754541414!5m2!1suk!2sua" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa lokalizacji ${hotel.name}`}
                />
              ) : id === "2" ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.8599651652805!2d21.020931511120132!3d52.232624397162176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf6f11be3f5%3A0x22000dec6e6bbf2b!2sHotel%20Indigo%20Warsaw%20-%20Nowy%20Swiat%20by%20IHG!5e1!3m2!1suk!2sua!4v1752755246729!5m2!1suk!2sua" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa lokalizacji ${hotel.name}`}
                />
              ) : id === "3" ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.398778258702!2d16.89093747672031!3d52.40036264508031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d166bc1731%3A0xf8085cff7220ab6f!2sCity%20Park%20Hotel%20%26%20Residence%20Pozna%C5%84!5e1!3m2!1suk!2sua!4v1752755322674!5m2!1suk!2sua" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa lokalizacji ${hotel.name}`}
                />
              ) : (
                <iframe
                  title={`Mapa lokalizacji ${hotel.name}`}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${hotel.coordinates.lat},${hotel.coordinates.lng}&zoom=15`}
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="nearby-section">
          <h2>Atrakcje w pobliżu</h2>
          <div className="nearby-grid">
            {hotel.nearby.map((attraction, index) => (
              <div key={index} className="nearby-item">
                <span className="nearby-icon">📍</span>
                <span>{attraction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails; 
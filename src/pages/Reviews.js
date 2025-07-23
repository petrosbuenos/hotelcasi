import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const ratings = [
    { id: 'all', name: 'Wszystkie oceny' },
    { id: '5', name: '5 gwiazdek' },
    { id: '4', name: '4+ gwiazdki' },
    { id: '3', name: '3+ gwiazdki' }
  ];

  const hotels = [
    {
      id: 1,
      name: "Hotel Mieszko",
      location: "ul. Kosynierów Gdyńskich 82, 66-400 Gorzów Wielkopolski",
      rating: 4.7,
      price: "350 zł",
      image: "/HotelMieszko.jpg",
      website: "https://hotel-mieszko.pl",
      description: "Wygodny hotel w centrum Gorzowa Wielkopolskiego z doskonałą lokalizacją i wysokim standardem obsługi.",
      amenities: ["Wi-Fi", "Restauracja", "Parking", "Sala konferencyjna", "Centrum fitness"],
      reviews: 156
    },
    {
      id: 2,
      name: "Indigo Warsaw",
      location: "ul. Smolna 40, 00-375 Warszawa",
      rating: 4.8,
      price: "450 zł",
      image: "/IndigoWarsaw.jpg",
      website: "https://indigowarsaw.com/",
      description: "Nowoczesny hotel butikowy w sercu Warszawy z unikalnym designem i doskonałym serwisem.",
      amenities: ["Wi-Fi", "Restauracja", "Bar", "Spa", "Centrum fitness"],
      reviews: 234
    },
    {
      id: 3,
      name: "City Park Hotel",
      location: "ul. Wyspiańskiego 26a, 60-751 Poznań",
      rating: 4.6,
      price: "380 zł",
      image: "/CityParkHotel.jpg",
      website: "https://cityparkhotel.pl/pl/",
      description: "Elegancki hotel w centrum Poznania z widokiem na park i bliskością głównych atrakcji miasta.",
      amenities: ["Wi-Fi", "Restauracja", "Basen", "Spa", "Parking"],
      reviews: 189
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesRating = selectedRating === 'all' || hotel.rating >= parseInt(selectedRating);
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesRating && matchesSearch;
  });

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="page-header">
          <h1>Hotele w Polsce</h1>
          <p>Znajdź idealny hotel w Polsce za pomocą naszych szczegółowych recenzji</p>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Wyszukiwanie hoteli lub miejsc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <label>Ocena:</label>
              <select 
                value={selectedRating} 
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                {ratings.map(rating => (
                  <option key={rating.id} value={rating.id}>
                    {rating.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="results-info">
          <p>Znaleziono {filteredHotels.length} hoteli</p>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-grid">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className="hotel-content">
                <div className="hotel-header">
                  <h3>{hotel.name}</h3>
                  <div className="hotel-rating">
                    <span className="stars">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
                    <span className="rating-text">{hotel.rating}/5</span>
                    <span className="reviews-count">({hotel.reviews} відгуків)</span>
                  </div>
                </div>
                
                <p className="hotel-location">{hotel.location}</p>
                <p className="hotel-description">{hotel.description}</p>
                
                <div className="hotel-amenities">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="amenity-tag">+{hotel.amenities.length - 3} більше</span>
                  )}
                </div>
                
                <div className="hotel-footer">
                  <div className="hotel-price">od {hotel.price}/noc</div>
                  <div className="hotel-buttons">
                    <Link to={`/reviews/${hotel.id}`} className="btn">Szczegóły</Link>
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Strona hotelu</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="no-results">
            <p>Nie znaleziono hoteli według Twoich kryteriów. Spróbuj zmienić filtry.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews; 
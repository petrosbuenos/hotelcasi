import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Wszystkie kategorie' },
    { id: 'luxury', name: 'Luksusowe hotele' },
    { id: 'budget', name: 'Opcje budżetowe' },
    { id: 'resorts', name: 'Kurorty' },
    { id: 'apartments', name: 'Apartamenty' },
    { id: 'boutique', name: 'Hotele butikowe' }
  ];

  const ratings = [
    { id: 'all', name: 'Wszystkie oceny' },
    { id: '5', name: '5 gwiazdek' },
    { id: '4', name: '4+ gwiazdki' },
    { id: '3', name: '3+ gwiazdki' }
  ];

  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Europe",
      location: "Paryż, Francja",
      category: "luxury",
      rating: 4.8,
      price: "€200",
      image: "🏨",
      description: "Luksusowy hotel w sercu Paryża z widokiem na Wieżę Eiffla.",
      amenities: ["Wi-Fi", "Spa", "Restauracja", "Basen", "Centrum fitness"],
      reviews: 127
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Barcelona, Hiszpania",
      category: "resorts",
      rating: 4.6,
      price: "€180",
      image: "🌊",
      description: "Kurort nad morzem z własną plażą i restauracjami.",
      amenities: ["Plaża", "Restauracja", "Basen", "Wi-Fi", "Parking"],
      reviews: 89
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Szwajcarskie Alpy",
      category: "boutique",
      rating: 4.9,
      price: "€300",
      image: "🏔️",
      description: "Unikalny hotel butikowy w górach z panoramiczny widokiem.",
      amenities: ["Widok na góry", "Restauracja", "Spa", "Wi-Fi", "Transfer"],
      reviews: 156
    },
    {
      id: 4,
      name: "City Center Hotel",
      location: "Berlin, Niemcy",
      category: "budget",
      rating: 4.2,
      price: "€80",
      image: "🏢",
      description: "Wygodny hotel budżetowy w centrum miasta.",
      amenities: ["Wi-Fi", "Restauracja", "Parking", "Sala konferencyjna"],
      reviews: 203
    },
    {
      id: 5,
      name: "Seaside Apartments",
      location: "Ateny, Grecja",
      category: "apartments",
      rating: 4.5,
      price: "€120",
      image: "🏠",
      description: "Nowoczesne apartamenty z widokiem na morze i kuchnią.",
      amenities: ["Kuchnia", "Wi-Fi", "Balkon", "Parking", "Pralnia"],
      reviews: 67
    },
    {
      id: 6,
      name: "Royal Palace Hotel",
      location: "Londyn, Wielka Brytania",
      category: "luxury",
      rating: 4.7,
      price: "€350",
      image: "👑",
      description: "Historyczny luksusowy hotel w centrum Londynu.",
      amenities: ["Spa", "Restauracja", "Basen", "Centrum fitness", "Concierge"],
      reviews: 234
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesCategory = selectedCategory === 'all' || hotel.category === selectedCategory;
    const matchesRating = selectedRating === 'all' || hotel.rating >= parseInt(selectedRating);
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesRating && matchesSearch;
  });

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="page-header">
          <h1>Recenzje hoteli</h1>
          <p>Znajdź idealny hotel za pomocą naszych szczegółowych recenzji</p>
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
              <label>Kategoria:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

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
              <div className="hotel-image">{hotel.image}</div>
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
                    <button className="btn">Szczegóły</button>
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
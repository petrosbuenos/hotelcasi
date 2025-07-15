import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import HotelDetails from './pages/HotelDetails';
import './App.css';

// Компонент для автоматичного прокручування вгору при зміні маршруту
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <AgeVerification />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:id" element={<HotelDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App; 
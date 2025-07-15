import React from 'react';
import './About.css';
import AnnaKowalska from '../img/team/AnnaKowalska.jpeg';
import MichalNowak from '../img/team/MichałNowak.jpeg';
import ElenaWisniewska from '../img/team/ElenaWiśniewska.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "Redaktor naczelny",
      description: "Ekspert turystyczny z 10-letnim doświadczeniem",
      avatar: AnnaKowalska
    },
    {
      id: 2,
      name: "Michał Nowak",
      position: "Dyrektor techniczny",
      description: "Specjalista od rozwoju web i UX/UI",
      avatar: MichalNowak
    },
    {
      id: 3,
      name: "Elena Wiśniewska",
      position: "Menedżer treści",
      description: "Doświadczony podróżnik i bloger",
      avatar: ElenaWisniewska
    }
  ];

  const stats = [
    { number: "500+", label: "Hoteli w bazie" },
    { number: "10K+", label: "Recenzji" },
    { number: "50+", label: "Krajów" },
    { number: "100K+", label: "Użytkowników" }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>O StayVerso Reviews</h1>
          <p>
            Jesteśmy zespołem entuzjastów, którzy kochają podróże i chcą pomóc 
            innym znaleźć najlepsze miejsca na wypoczynek.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Nasza misja</h2>
              <p>
                Dostarczać szczere, obiektywne i szczegółowe recenzje hoteli i kurortów 
                na całym świecie. Wierzymy, że każdy zasługuje na najlepszy wypoczynek, 
                a naszym celem jest pomóc Ci dokonać właściwego wyboru.
              </p>
              <p>
                Nasze recenzje opierają się na rzeczywistym doświadczeniu gości, szczegółowej analizie 
                udogodnień i aktualnych informacjach o cenach i dostępności.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">🌍</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Nasze wartości</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Szczerość</h3>
              <p>Dostarczamy tylko prawdziwe i obiektywne informacje, bez ukrytej reklamy.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Dokładność</h3>
              <p>Regularnie aktualizujemy informacje i sprawdzamy wszystkie szczegóły dla zapewnienia dokładności.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Ekspertyza</h3>
              <p>Nasz zespół składa się z doświadczonych podróżników i ekspertów turystycznych.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Troska</h3>
              <p>Troszczymy się o Twój komfort i satysfakcję z podróży.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Nasz zespół</h2>
          <p className="team-intro">
            Poznaj ekspertów, którzy tworzą treści dla StayVerso Reviews
          </p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="member-avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Nasza historia</h2>
              <p>
                StayVerso Reviews zostało założone w 2020 roku przez grupę przyjaciół, którzy 
                napotkali problem ze znalezieniem wiarygodnych informacji o hotelach 
                podczas planowania swoich podróży.
              </p>
              <p>
                Rozczarowani reklamowymi recenzjami i niepełnymi informacjami na istniejących 
                platformach, postanowiliśmy stworzyć własny zasób, gdzie każda recenzja 
                będzie szczera, szczegółowa i użyteczna.
              </p>
              <p>
                Przez lata pracy pomogliśmy tysiącom podróżników znaleźć idealne 
                miejsca na wypoczynek i sprawić, że ich podróże były niezapomniane.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">📚</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Gotowi dowiedzieć się więcej?</h2>
          <p>Przejrzyj nasze recenzje i znajdź idealny hotel na swoją następną podróż</p>
          <button className="btn">Przeglądaj recenzje</button>
        </section>
      </div>
    </div>
  );
};

export default About; 
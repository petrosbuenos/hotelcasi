import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Strona główna</span>
          <span className="separator">/</span>
          <span>Regulamin</span>
        </div>

        <div className="terms-content">
          <h1>Regulamin serwisu</h1>
          
          <p className="intro">
            Niniejszy regulamin określa zasady korzystania z serwisu internetowego StayVerso Reviews 
            dostępnego pod adresem stayversoreviews.com
          </p>

          <section>
            <h2>§1. Postanowienia ogólne</h2>
            <p>
              <strong>1.1.</strong> Właścicielem serwisu StayVerso Reviews jest zespół redakcyjny i techniczny, 
              który pełni rolę administratora serwisu.
            </p>
            <p>
              <strong>1.2.</strong> Serwis ma charakter informacyjny i służy prezentacji recenzji hoteli, 
              kurortów oraz innych obiektów noclegowych.
            </p>
            <p>
              <strong>1.3.</strong> Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.
            </p>
            <p>
              <strong>1.4.</strong> Regulamin może być zmieniany przez administratora serwisu. 
              O zmianach użytkownicy będą informowani poprzez publikację nowej wersji na stronie.
            </p>
          </section>

          <section>
            <h2>§2. Definicje</h2>
            <p><strong>2.1.</strong> Użyte w regulaminie pojęcia oznaczają:</p>
            <ul>
              <li><strong>Serwis</strong> – strona internetowa stayversoreviews.com</li>
              <li><strong>Użytkownik</strong> – osoba korzystająca z serwisu</li>
              <li><strong>Administrator</strong> – zespół zarządzający serwisem</li>
              <li><strong>Treści</strong> – wszystkie materiały zamieszczone w serwisie (teksty, zdjęcia, recenzje)</li>
              <li><strong>Recenzje</strong> – opinie i oceny obiektów noclegowych</li>
            </ul>
          </section>

          <section>
            <h2>§3. Cel i zakres działania serwisu</h2>
            <p><strong>3.1.</strong> Serwis StayVerso Reviews ma na celu:</p>
            <ul>
              <li>Dostarczanie obiektywnych i szczegółowych recenzji hoteli i kurortów</li>
              <li>Pomoc użytkownikom w wyborze odpowiedniego miejsca noclegowego</li>
              <li>Prezentację informacji o cenach, udogodnieniach i lokalizacji obiektów</li>
              <li>Dostarczanie aktualnych informacji o branży turystycznej</li>
            </ul>
            <p>
              <strong>3.2.</strong> Serwis nie świadczy usług rezerwacyjnych ani pośrednictwa w sprzedaży.
            </p>
            <p>
              <strong>3.3.</strong> Wszystkie informacje prezentowane w serwisie mają charakter informacyjny 
              i nie stanowią oferty handlowej w rozumieniu przepisów prawa.
            </p>
          </section>

          <section>
            <h2>§4. Zasady korzystania z serwisu</h2>
            <p><strong>4.1.</strong> Użytkownik może korzystać z serwisu wyłącznie w celach zgodnych z prawem.</p>
            <p><strong>4.2.</strong> Zabronione jest:</p>
            <ul>
              <li>Korzystanie z serwisu w sposób zakłócający jego działanie</li>
              <li>Próby nieautoryzowanego dostępu do systemów serwisu</li>
              <li>Kopiowanie i rozpowszechnianie treści bez zgody administratora</li>
              <li>Wykorzystywanie treści serwisu w celach komercyjnych bez zgody</li>
              <li>Publikowanie treści obraźliwych, nieprawdziwych lub naruszających prawa osób trzecich</li>
            </ul>
            <p>
              <strong>4.3.</strong> Użytkownik ponosi odpowiedzialność za szkody wyrządzone administratorowi 
              lub osobom trzecim w wyniku naruszenia niniejszego regulaminu.
            </p>
          </section>

          <section>
            <h2>§5. Treści serwisu</h2>
            <p><strong>5.1.</strong> Wszystkie treści zamieszczone w serwisie są chronione prawami autorskimi.</p>
            <p><strong>5.2.</strong> Administrator dokłada starań, aby prezentowane informacje były aktualne i wiarygodne.</p>
            <p><strong>5.3.</strong> Recenzje opierają się na:</p>
            <ul>
              <li>Rzeczywistych doświadczeniach gości</li>
              <li>Oficjalnych informacjach od obiektów</li>
              <li>Danych z wiarygodnych źródeł</li>
              <li>Analizie dostępnych materiałów</li>
            </ul>
            <p>
              <strong>5.4.</strong> Administrator nie gwarantuje, że wszystkie informacje są zawsze aktualne 
              i kompletne, ze względu na dynamiczny charakter branży turystycznej.
            </p>
          </section>

          <section>
            <h2>§6. Odpowiedzialność</h2>
            <p><strong>6.1.</strong> Administrator nie ponosi odpowiedzialności za:</p>
            <ul>
              <li>Decyzje podjęte przez użytkowników na podstawie informacji z serwisu</li>
              <li>Szkody wynikłe z korzystania z serwisu</li>
              <li>Działania osób trzecich</li>
              <li>Przestoje techniczne niezależne od administratora</li>
              <li>Zmiany w ofertach obiektów prezentowanych w serwisie</li>
            </ul>
            <p>
              <strong>6.2.</strong> Odpowiedzialność administratora jest ograniczona do maksymalnego 
              zakresu dozwolonego przez obowiązujące przepisy prawa.
            </p>
            <p>
              <strong>6.3.</strong> Użytkownik korzysta z serwisu na własne ryzyko.
            </p>
          </section>

          <section>
            <h2>§7. Własność intelektualna</h2>
            <p><strong>7.1.</strong> Wszystkie prawa do treści serwisu przysługują administratorowi.</p>
            <p><strong>7.2.</strong> Zabronione jest:</p>
            <ul>
              <li>Kopiowanie, modyfikowanie i rozpowszechnianie treści bez zgody</li>
              <li>Wykorzystywanie nazwy serwisu, logo i elementów graficznych</li>
              <li>Tworzenie linków do serwisu w sposób naruszający dobre obyczaje</li>
            </ul>
            <p>
              <strong>7.3.</strong> Dozwolone jest cytowanie fragmentów treści z podaniem źródła 
              i linku do serwisu.
            </p>
          </section>

          <section>
            <h2>§8. Prywatność i dane osobowe</h2>
            <p>
              <strong>8.1.</strong> Zasady przetwarzania danych osobowych określa 
              <a href="/polityka-prywatnosci">Polityka prywatności</a>.
            </p>
            <p>
              <strong>8.2.</strong> Korzystanie z plików cookies reguluje 
              <a href="/cookies">Polityka cookies</a>.
            </p>
          </section>

          <section>
            <h2>§9. Reklamacje i spory</h2>
            <p><strong>9.1.</strong> Reklamacje dotyczące działania serwisu można zgłaszać:</p>
            <ul>
              <li>Drogą elektroniczną: kontakt@stayversoreviews.com</li>
              <li>Telefonicznie: +48 691 769 487</li>
              <li>Przez formularz kontaktowy dostępny na stronie</li>
              <li>Pocztą tradycyjną: ul. Schulza Brunona 88, Warszawa</li>
            </ul>
            <p>
              <strong>9.2.</strong> Administrator rozpatruje reklamacje w terminie 14 dni od ich otrzymania.
            </p>
            <p>
              <strong>9.3.</strong> Spory wynikłe z korzystania z serwisu będą rozstrzygane 
              przez sąd właściwy dla siedziby administratora.
            </p>
          </section>

          <section>
            <h2>§10. Postanowienia końcowe</h2>
            <p>
              <strong>10.1.</strong> Regulamin wchodzi w życie z dniem publikacji na stronie serwisu.
            </p>
            <p>
              <strong>10.2.</strong> W sprawach nieuregulowanych niniejszym regulaminem 
              zastosowanie mają przepisy prawa polskiego.
            </p>
            <p>
              <strong>10.3.</strong> Administrator zastrzega sobie prawo do zmiany regulaminu 
              w każdym czasie z zachowaniem praw użytkowników.
            </p>
            <p>
              <strong>10.4.</strong> O zmianach regulaminu użytkownicy będą informowani 
              poprzez publikację nowej wersji na stronie serwisu.
            </p>
          </section>

          <section className="contact-section">
            <h2>Kontakt</h2>
            <p>
              W przypadku pytań dotyczących niniejszego regulaminu, prosimy o kontakt:
            </p>
            <div className="contact-info">
              <p>📧 E-mail: <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a></p>
              <p>📞 Telefon: <a href="tel:+48691769487">+48 691 769 487</a></p>
              <p>📍 Adres: ul. Schulza Brunona 88, Warszawa</p>
              <p>📄 Formularz kontaktowy: <a href="/kontakt">/kontakt</a></p>
            </div>
            <p className="last-update">
              <strong>Data ostatniej aktualizacji:</strong> 6 czerwca 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 
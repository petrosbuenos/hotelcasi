import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Strona główna</span>
          <span className="separator">/</span>
          <span>Polityka cookies</span>
        </div>

        <div className="cookie-content">
          <h1>Polityka cookies</h1>
          
          <p className="intro">
            Niniejsza polityka wyjaśnia, w jaki sposób serwis stayversoreviews.com wykorzystuje pliki cookies 
            i podobne technologie w celu poprawy komfortu korzystania z witryny.
          </p>

          <section>
            <h2>1. Czym są pliki cookies?</h2>
            <p>
              Pliki cookies (ciasteczka) to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika 
              (komputerze, smartfonie, tablecie), podczas odwiedzania stron internetowych. Cookies są powszechnie 
              wykorzystywane do zapewnienia prawidłowego działania serwisu, personalizacji treści oraz gromadzenia 
              anonimowych danych statystycznych.
            </p>
            <p>
              Cookies nie zawierają danych osobowych i nie służą do identyfikacji użytkownika. Możesz w każdej 
              chwili zmienić ustawienia swojej przeglądarki dotyczące obsługi plików cookies.
            </p>
            <p><strong>Data ostatniej aktualizacji:</strong> 6 czerwca 2025</p>
          </section>

          <section>
            <h2>Rodzaje stosowanych plików cookies</h2>
            <p>
              Na stronie stayversoreviews.com wykorzystujemy różne rodzaje plików cookies, które pełnią określone 
              funkcje. Wszystkie są zgodne z obowiązującymi przepisami prawa i służą poprawie jakości korzystania z serwisu.
            </p>

            <h3>1. Niezbędne pliki cookies</h3>
            <p>
              Te cookies są wymagane do prawidłowego funkcjonowania strony – umożliwiają np. nawigację po witrynie, 
              dostęp do chronionych sekcji czy zapamiętanie sesji użytkownika. Bez nich korzystanie z serwisu 
              mogłoby być niemożliwe lub znacznie utrudnione.
            </p>

            <h3>2. Cookies funkcjonalne</h3>
            <p>
              Umożliwiają zapamiętanie preferencji użytkownika, np. wyboru języka, regionu czy ustawień wyświetlania 
              strony. Dzięki nim serwis może działać zgodnie z Twoimi preferencjami.
            </p>

            <h3>3. Cookies analityczne i statystyczne</h3>
            <p>
              Pomagają nam analizować sposób, w jaki użytkownicy korzystają z witryny (np. Google Analytics). 
              Dzięki tym danym możemy optymalizować treści, układ i wydajność strony. Dane te są anonimowe 
              i nie pozwalają na identyfikację osoby.
            </p>

            <h3>4. Cookies marketingowe i reklamowe</h3>
            <p>
              Te cookies mogą być wykorzystywane do personalizacji reklam wyświetlanych na stronie oraz poza nią 
              – w oparciu o aktywność użytkownika. Często pochodzą od zewnętrznych partnerów (np. Google, Facebook) 
              i pozwalają mierzyć skuteczność kampanii reklamowych.
            </p>
          </section>

          <section>
            <h2>Dlaczego używamy plików cookies?</h2>
            <p>
              Cookies pomagają nam lepiej dostosować serwis stayversoreviews.com do potrzeb użytkowników. 
              Służą nie tylko analizie ruchu, ale też poprawie komfortu korzystania z witryny.
            </p>
            <ul>
              <li><strong>Zapewnienie prawidłowego działania strony</strong> – np. zapamiętanie logowania, nawigacja między podstronami.</li>
              <li><strong>Zapisywanie indywidualnych preferencji użytkownika</strong> (język, układ, wybrane ustawienia).</li>
              <li><strong>Analiza statystyczna odwiedzin i zachowań użytkowników</strong> – w celu optymalizacji treści i struktury strony.</li>
              <li><strong>Wsparcie działań marketingowych</strong> – prezentacja spersonalizowanych treści i reklam.</li>
              <li><strong>Zapewnienie bezpieczeństwa</strong> – wykrywanie nadużyć i ochrona przed atakami botów lub nieautoryzowanym dostępem.</li>
            </ul>
            <p>
              Wszystkie informacje gromadzone za pomocą cookies są przetwarzane w sposób zanonimizowany lub pseudonimizowany, 
              zgodnie z obowiązującymi przepisami prawa.
            </p>
          </section>

          <section>
            <h2>Zarządzanie plikami cookies</h2>
            <p>
              Masz pełną kontrolę nad plikami cookies. W każdej chwili możesz zmienić swoje preferencje dotyczące 
              ich używania lub całkowicie je wyłączyć.
            </p>

            <h3>1. Ustawienia przeglądarki</h3>
            <p>
              Większość przeglądarek internetowych pozwala na kontrolowanie plików cookies poprzez ustawienia prywatności. Możesz:
            </p>
            <ul>
              <li>blokować wszystkie cookies,</li>
              <li>usuwać istniejące cookies,</li>
              <li>otrzymywać powiadomienie przy każdej próbie zapisania pliku cookie.</li>
            </ul>
            <p>
              <strong>Uwaga:</strong> wyłączenie lub ograniczenie cookies może wpłynąć na poprawne działanie 
              niektórych funkcji serwisu.
            </p>

            <h3>2. Cofnięcie zgody</h3>
            <p>
              Jeżeli wcześniej wyraziłeś zgodę na używanie cookies, możesz ją cofnąć w dowolnym momencie 
              poprzez ustawienia przeglądarki lub klikając odpowiedni link w dolnej części strony (jeśli dostępny).
            </p>

            <h3>3. Więcej informacji</h3>
            <p>Szczegółowe instrukcje zarządzania cookies dla popularnych przeglądarek:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/pl/kb/wlaczanie-i-wylaczanie-ciasteczek" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2>Cookies stron trzecich i partnerzy</h2>
            <p>
              Nasza strona może korzystać z usług zewnętrznych dostawców, którzy również używają plików cookies 
              w celach analitycznych lub marketingowych.
            </p>

            <h3>1. Cookies partnerów zewnętrznych</h3>
            <p>
              Współpracujemy z podmiotami trzecimi, które mogą umieszczać własne cookies podczas Twojej wizyty 
              na naszej stronie. Dotyczy to m.in. usług takich jak:
            </p>
            <ul>
              <li><strong>Google Analytics</strong> – analiza statystyk i zachowań użytkowników,</li>
              <li><strong>Google Ads i Facebook Ads</strong> – personalizacja reklam i pomiar ich skuteczności,</li>
              <li><strong>narzędzia marketingowe</strong> (np. pixel Meta, retargeting),</li>
              <li><strong>narzędzia afiliacyjne i porównywarki cenowe</strong>.</li>
            </ul>

            <h3>2. Ograniczona kontrola</h3>
            <p>
              Nie mamy bezpośredniego dostępu do plików cookies umieszczanych przez te podmioty, ani do danych, 
              które gromadzą. Każdy z partnerów posiada własną politykę prywatności i sposób zarządzania cookies.
            </p>
            <p>
              Zalecamy zapoznanie się z politykami prywatności dostawców zewnętrznych przed wyrażeniem zgody na pliki cookies:
            </p>
            <ul>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Polityka prywatności Google</a></li>
              <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Polityka prywatności Facebook / Meta</a></li>
            </ul>
          </section>

          <section>
            <h2>Szczegółowe informacje o cookies</h2>
            
            <h3>Cookies sesyjne</h3>
            <p>
              Są to tymczasowe pliki cookies, które są usuwane po zamknięciu przeglądarki. Służą do utrzymania 
              sesji użytkownika podczas przeglądania strony.
            </p>

            <h3>Cookies stałe</h3>
            <p>
              Pozostają na urządzeniu przez określony czas (np. rok) lub do momentu ich ręcznego usunięcia. 
              Służą do zapamiętywania preferencji użytkownika.
            </p>

            <h3>Cookies podmiotów trzecich</h3>
            <p>
              Umieszczane przez zewnętrznych dostawców usług (np. Google Analytics, Facebook). 
              Służą do analizy ruchu i personalizacji reklam.
            </p>
          </section>

          <section>
            <h2>Zmiany w polityce cookies i kontakt</h2>
            <p>
              Niniejsza polityka może być aktualizowana w celu dostosowania do zmian prawnych lub technologicznych. 
              Zalecamy regularne sprawdzanie jej treści.
            </p>

            <h3>1. Modyfikacje dokumentu</h3>
            <p>
              StayVerso Reviews zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies 
              w dowolnym momencie. Zmiany wchodzą w życie w momencie opublikowania ich na stronie internetowej.
            </p>

            <h3>2. Kontakt w sprawach cookies</h3>
            <p>
              Jeśli masz pytania dotyczące sposobu używania plików cookies lub chcesz wycofać zgodę, 
              skontaktuj się z nami:
            </p>
          </section>

          <section className="contact-section">
            <h2>Kontakt</h2>
            <div className="contact-info">
              <p>📧 E-mail: <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a></p>
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

export default CookiePolicy; 
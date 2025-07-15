import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Strona główna</span>
          <span className="separator">/</span>
          <span>Polityka prywatności</span>
        </div>

        <div className="privacy-content">
          <h1>Polityka prywatności</h1>
          
          <p className="intro">
            Poniższy dokument wyjaśnia, jakie dane zbieramy, w jaki sposób je przetwarzamy i w jakim celu. 
            Dbamy o Twoją prywatność i przejrzystość działań.
          </p>

          <section>
            <h2>1. Kim jesteśmy?</h2>
            <p>
              Strona <strong>StayVerso Reviews</strong> (dostępna pod adresem: <code>https://stayversoreviews.com</code>) 
              jest prowadzona przez zespół redakcyjny i techniczny, który pełni rolę administratora danych osobowych 
              w rozumieniu przepisów RODO.
            </p>
            <p>
              Kontakt z administratorem możliwy jest drogą mailową: <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a>
            </p>
          </section>

          <section>
            <h2>2. Dlaczego publikujemy ten dokument?</h2>
            <p>Polityka prywatności powstała, aby wyjaśnić:</p>
            <ul>
              <li>Jakie dane zbieramy o użytkownikach (np. przez formularz kontaktowy, pliki cookies, statystyki strony),</li>
              <li>W jaki sposób je zabezpieczamy,</li>
              <li>Na jakiej podstawie prawnej przetwarzamy dane,</li>
              <li>Jakie masz prawa jako użytkownik,</li>
              <li>Z jakich narzędzi firm trzecich korzystamy (np. Google Analytics, formularze kontaktowe).</li>
            </ul>
            <p>
              Wszystko po to, abyś miał pełną świadomość, jak funkcjonuje nasza strona i w jaki sposób 
              dbamy o bezpieczeństwo Twoich danych.
            </p>
          </section>

          <section>
            <h2>Jakie dane zbieramy i w jakim celu?</h2>
            <p>
              Gromadzimy tylko te dane, które są niezbędne do prawidłowego działania strony, komunikacji 
              z użytkownikami i analizy ruchu.
            </p>

            <h3>1. Dane podawane dobrowolnie</h3>
            <p>Przez formularze kontaktowe użytkownik może dobrowolnie przekazać nam dane takie jak:</p>
            <ul>
              <li>Adres e-mail</li>
              <li>Imię lub nazwa użytkownika</li>
              <li>Treść wiadomości</li>
            </ul>
            <p>Te dane są wykorzystywane wyłącznie w celu udzielenia odpowiedzi lub dalszej komunikacji (np. nawiązania współpracy).</p>

            <h3>2. Dane zbierane automatycznie</h3>
            <p>Podczas korzystania z naszej strony automatycznie mogą być gromadzone anonimowe informacje:</p>
            <ul>
              <li>Adres IP użytkownika</li>
              <li>Typ przeglądarki i systemu operacyjnego</li>
              <li>Czas przebywania na stronie, liczba odwiedzin, kliknięcia – w ramach narzędzi analitycznych</li>
            </ul>
            <p>
              Te dane służą do analizy ruchu na stronie (np. Google Analytics) oraz do celów statystycznych 
              i poprawy działania serwisu.
            </p>

            <h3>3. Pliki cookies</h3>
            <p>Nasza strona używa plików cookies (ciasteczek), by:</p>
            <ul>
              <li>zapamiętać preferencje użytkownika (np. wybraną wersję językową),</li>
              <li>analizować sposób korzystania z witryny,</li>
              <li>dopasować treści i reklamy do zainteresowań użytkownika (jeśli włączone).</li>
            </ul>
            <p>Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.</p>
          </section>

          <section>
            <h2>Na jakiej podstawie i jak długo przetwarzamy dane?</h2>
            <p>
              Przetwarzanie danych odbywa się zgodnie z przepisami RODO i tylko wtedy, gdy istnieje 
              ku temu uzasadniona podstawa prawna.
            </p>

            <h3>1. Podstawa prawna przetwarzania danych</h3>
            <p>Twoje dane osobowe przetwarzamy zgodnie z art. 6 ust. 1 RODO, w zależności od kontekstu:</p>
            <ul>
              <li><strong>Zgoda użytkownika</strong> – np. przy wysłaniu formularza kontaktowego, zapisie na newsletter (art. 6 ust. 1 lit. a RODO)</li>
              <li><strong>Realizacja kontaktu</strong> lub odpowiedzi na zapytanie (art. 6 ust. 1 lit. b RODO)</li>
              <li><strong>Uzasadniony interes administratora</strong> – np. analiza statystyk strony (art. 6 ust. 1 lit. f RODO)</li>
            </ul>

            <h3>2. Czas przechowywania danych</h3>
            <p>Twoje dane przechowujemy przez okres:</p>
            <ul>
              <li>do czasu realizacji celu, dla którego zostały zebrane (np. udzielenie odpowiedzi),</li>
              <li>do czasu cofnięcia zgody – jeśli przetwarzanie odbywa się na jej podstawie,</li>
              <li>maksymalnie 12 miesięcy od ostatniego kontaktu – jeśli nie doszło do dalszej współpracy lub działania,</li>
              <li>dane statystyczne (anonimowe) – przechowywane mogą być dłużej w formie zagregowanej.</li>
            </ul>
            <p>Po upływie tych okresów dane są trwale usuwane lub anonimizowane.</p>
          </section>

          <section>
            <h2>Jakie prawa przysługują Ci w związku z przetwarzaniem danych?</h2>
            <p>
              Zgodnie z Rozporządzeniem o Ochronie Danych Osobowych (RODO) masz pełne prawo do zarządzania 
              swoimi danymi. Poniżej przedstawiamy Twoje możliwości.
            </p>
            <ul>
              <li><strong>Prawo dostępu</strong> – masz prawo dowiedzieć się, jakie dane przetwarzamy i w jakim celu.</li>
              <li><strong>Prawo do sprostowania</strong> – możesz poprawić nieaktualne lub nieprawidłowe dane.</li>
              <li><strong>Prawo do usunięcia danych („prawo do bycia zapomnianym")</strong> – możesz zażądać usunięcia Twoich danych w określonych przypadkach.</li>
              <li><strong>Prawo do przenoszenia danych</strong> – na Twoje życzenie możemy przesłać dane do innego administratora.</li>
              <li><strong>Prawo do sprzeciwu</strong> – możesz sprzeciwić się przetwarzaniu danych w celach marketingowych lub na podstawie uzasadnionego interesu.</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> – możesz poprosić o „zamrożenie" przetwarzania danych, np. w czasie rozpatrywania reklamacji.</li>
            </ul>
            <p>
              W celu skorzystania z któregokolwiek z powyższych praw – skontaktuj się z nami drogą mailową: 
              <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a>
            </p>

            <h3>Masz zastrzeżenia? Możesz złożyć skargę</h3>
            <p>
              Jeśli uznasz, że przetwarzamy Twoje dane niezgodnie z przepisami, masz prawo złożyć skargę 
              do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).
            </p>
          </section>

          <section>
            <h2>Z jakich narzędzi i partnerów korzystamy?</h2>
            <p>
              Dla zapewnienia jakości działania strony, statystyk oraz ochrony – współpracujemy z wybranymi 
              partnerami technologicznymi. Część z nich może przetwarzać dane anonimowe lub dostępowe.
            </p>

            <h3>1. Google Analytics (analityka ruchu)</h3>
            <p>
              Używamy narzędzia Google Analytics do analizy statystyk strony. Zbierane dane są anonimowe 
              i nie pozwalają na bezpośrednią identyfikację użytkownika.
            </p>
            <ul>
              <li>Typy danych: lokalizacja (miasto), urządzenie, czas spędzony na stronie, źródło wejścia</li>
              <li>Dane mogą być przetwarzane poza Europejskim Obszarem Gospodarczym (EOG)</li>
              <li>Oparte na standardowych klauzulach ochrony danych UE</li>
            </ul>

            <h3>2. Formularze kontaktowe</h3>
            <p>
              Wiadomości wysyłane przez formularz trafiają bezpośrednio na naszą skrzynkę e-mail. 
              Formularz nie przechowuje danych na serwerze.
            </p>
          </section>

          <section>
            <h2>Bezpieczeństwo danych</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane przed 
              nieuprawnionym dostępem, utratą, zniszczeniem lub zmianą.
            </p>
            <ul>
              <li>Szyfrowanie danych w transporcie (HTTPS)</li>
              <li>Regularne aktualizacje zabezpieczeń</li>
              <li>Ograniczony dostęp do danych osobowych</li>
              <li>Regularne kopie zapasowe</li>
            </ul>
          </section>

          <section>
            <h2>Zmiany w polityce prywatności</h2>
            <p>
              Niniejsza polityka może być aktualizowana w celu dostosowania do zmian prawnych lub technologicznych. 
              Zalecamy regularne sprawdzanie jej treści.
            </p>
            <p>
              <strong>Data ostatniej aktualizacji:</strong> 6 czerwca 2025
            </p>
          </section>

          <section className="contact-section">
            <h2>Kontakt</h2>
            <p>
              Jeśli masz pytania dotyczące tej polityki prywatności, skontaktuj się z nami:
            </p>
            <div className="contact-info">
              <p>📧 E-mail: <a href="mailto:kontakt@stayversoreviews.com">kontakt@stayversoreviews.com</a></p>
              <p>📄 Formularz kontaktowy: <a href="/kontakt">/kontakt</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
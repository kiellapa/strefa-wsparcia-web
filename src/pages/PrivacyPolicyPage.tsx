import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose lg:prose-lg max-w-none text-foreground">
          <Link to="/" className="no-underline">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć na stronę główną
            </Button>
          </Link>

          <h1>Polityka Prywatności</h1>
          <p className="lead">Ostatnia aktualizacja: [Data]</p>

          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez stronę internetową Strefa Wsparcia (dalej: "Serwis").
          </p>

          <h2>2. Administrator Danych Osobowych</h2>
          <p>
            Administratorem danych osobowych zawartych w serwisie jest Marta Rokicińska, prowadząca działalność pod adresem ul. Markowska 22, 03-742 Warszawa, NIP: [Numer NIP]. Kontakt z administratorem jest możliwy pod adresem e-mail: kontakt@strefawsparcia.pl.
          </p>

          <h2>3. Jakie dane zbieramy i w jakim celu?</h2>
          <p>
            Serwis zbiera informacje podane dobrowolnie przez użytkownika w formularzu kontaktowym.
          </p>
          <ul>
            <li>
              <strong>Formularz kontaktowy:</strong> Dane takie jak imię, adres e-mail, numer telefonu oraz treść wiadomości są zbierane wyłącznie w celu udzielenia odpowiedzi na zapytanie Użytkownika. Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).
            </li>
            <li>
              <strong>Pliki Cookies:</strong> Serwis może używać plików cookies w celu zapewnienia prawidłowego działania strony oraz w celach analitycznych (jeśli takie narzędzia są używane). Użytkownik może zarządzać plikami cookies z poziomu swojej przeglądarki.
            </li>
          </ul>

          <h2>4. Prawa Użytkownika</h2>
          <p>
            W związku z przetwarzaniem Twoich danych osobowych, przysługują Ci następujące prawa:
          </p>
          <ul>
            <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
            <li>Prawo do sprostowania (poprawiania) swoich danych.</li>
            <li>Prawo do usunięcia danych (tzw. "prawo do bycia zapomnianym").</li>
            <li>Prawo do ograniczenia przetwarzania danych.</li>
            <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
            <li>Prawo do przenoszenia danych.</li>
            <li>Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
          </ul>

          <h2>5. Udostępnianie danych</h2>
          <p>
            Twoje dane osobowe mogą być udostępniane podmiotom przetwarzającym dane na zlecenie administratora, np. dostawcom usług IT i firmom hostingowym, jednak tylko w celu i zakresie niezbędnym do realizacji wyżej wymienionych celów.
          </p>
          
          <h2>6. Bezpieczeństwo danych</h2>
          <p>
            Dbamy o bezpieczeństwo Twoich danych. Stosujemy środki techniczne i organizacyjne, aby chronić Twoje dane przed utratą, zniszczeniem, nieuprawnionym dostępem i ujawnieniem.
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
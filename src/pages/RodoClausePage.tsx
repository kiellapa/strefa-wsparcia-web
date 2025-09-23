import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RodoClausePage = () => {
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

          <h1>Klauzula Informacyjna RODO</h1>
          <p>
            Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), informuję, że:
          </p>
          <ol>
            <li>
              <strong>Administrator Danych:</strong> Administratorem Pani/Pana danych osobowych jest Marta Rokicińska, prowadząca działalność pod adresem ul. Markowska 22, 03-742 Warszawa.
            </li>
            <li>
              <strong>Cel i podstawa prawna przetwarzania:</strong> Pani/Pana dane osobowe (imię, adres e-mail, ewentualnie numer telefonu) podane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie, co stanowi prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO).
            </li>
            <li>
              <strong>Okres przechowywania danych:</strong> Pani/Pana dane będą przechowywane przez okres niezbędny do prowadzenia korespondencji, a po jej zakończeniu przez okres wymagany przepisami prawa lub do czasu przedawnienia ewentualnych roszczeń.
            </li>
            <li>
              <strong>Prawa osoby, której dane dotyczą:</strong> Przysługuje Pani/Panu prawo dostępu do treści swoich danych, prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo wniesienia sprzeciwu wobec ich przetwarzania.
            </li>
            <li>
              <strong>Prawo do wniesienia skargi:</strong> Ma Pani/Pan prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna Pani/Pan, iż przetwarzanie danych osobowych Pani/Pana dotyczących narusza przepisy RODO.
            </li>
            <li>
              <strong>Dobrowolność podania danych:</strong> Podanie przez Panią/Pana danych osobowych jest dobrowolne, ale niezbędne do przetworzenia zapytania.
            </li>
          </ol>
        </article>
      </div>
    </div>
  );
};

export default RodoClausePage;
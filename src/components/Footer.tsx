import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- ZAKTUALIZOWANY IMPORT

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // <-- POBIERZ AKTUALNĄ LOKALIZACJĘ
  const navigate = useNavigate(); // <-- POBIERZ FUNKCJĘ NAWIGACJI

  const quickLinks = [
    { label: "O mnie", target: "about" },
    { label: "Oferta", target: "services" },
    { label: "Podejście", target: "approach" },
    { label: "Opinie", target: "testimonials" },
    { label: "Kontakt", target: "contact" }
  ];

  const legalLinks = [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Klauzula RODO", href: "/klauzula-rodo" },
    { label: "Regulamin", href: "#" }, 
    { label: "Zasady terapii", href: "#" } 
  ];

  // V-- ZAKTUALIZOWANA FUNKCJA --V
  const scrollToSection = (target: string) => {
    // Jeśli jesteśmy na podstronie, wróć na stronę główną z hashem
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
    } else {
      // Jeśli jesteśmy na stronie głównej, po prostu przewiń
      const element = document.getElementById(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // ^-- KONIEC AKTUALIZACJI --^

  return (
    <footer className="bg-secondary-dark/30 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ... reszta kodu pozostaje bez zmian ... */}
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex flex-col">
                <span className="text-xl font-light text-foreground tracking-wide">
                  Strefa Wsparcia
                </span>
                <span className="text-sm text-primary font-medium -mt-1">
                  Marta Rokicińska
                </span>
              </div>
              <Heart className="w-5 h-5 text-accent ml-2" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Profesjonalna psychoterapia w Warszawie. Pomagam odnaleźć równowagę, 
              odporność i spokój w codziennym życiu. Terapia indywidualna i online.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">ul. Markowska 22, Warszawa</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">+48 668 207 872</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">kontakt@strefawsparcia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Wt-Śr: 16:00-21:00, Sob: 10:00-14:00</span>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-lg">Nawigacja</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.target)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-lg">Oferta</h4>
            <div className="space-y-3">
              <div className="text-muted-foreground text-sm">Terapia indywidualna</div>
              <div className="text-muted-foreground text-sm">Terapia uzależnień</div>
              <div className="text-muted-foreground text-sm">Neuroróżnorodność</div>
              <div className="text-muted-foreground text-sm">Sesje online</div>
              <div className="text-muted-foreground text-sm">Konsultacje</div>
              <div className="text-primary text-sm font-medium">Bezpłatna pierwsza konsultacja telefoniczna</div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border/30 pt-8">
          
          {/* Legal disclaimer */}
          <div className="bg-stone-soft/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-accent font-bold">!</span>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2 text-sm">Ważna informacja prawna</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Zastrzeżenie:</strong> Treści zawarte na tej stronie mają charakter informacyjny 
                  i nie stanowią porady medycznej ani psychologicznej. W przypadku problemów zdrowotnych 
                  należy skonsultować się z lekarzem lub wykwalifikowanym specjalistą. Psychoterapia nie 
                  zastępuje leczenia psychiatrycznego ani farmakologicznego. Wszystkie sesje odbywają się 
                  zgodnie z Kodeksem Etyczno-Zawodowym Psychologa oraz obowiązującymi przepisami prawa, 
                  w tym RODO.
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright and legal links */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Strefa Wsparcia - Marta Rokicińska. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Final note */}
          <div className="mt-6 pt-6 border-t border-border/20 text-center">
            <p className="text-xs text-muted-foreground">
              Strona stworzona z dbałością o Twoje potrzeby • Bezpieczne i poufne środowisko terapeutyczne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
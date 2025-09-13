import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Strefa Wsparcia
                </h3>
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <p className="text-muted-foreground">
                Marta Rokicińska<br />
                Psychoterapeutka<br />
                Warszawa, ul. Markowska 22
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Szybkie linki</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    O mnie
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Oferta
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Kontakt
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Kontakt</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+48 123 456 789</p>
                <p>kontakt@strefawsparcia.pl</p>
                <p>Poniedziałek - Piątek: 9:00-18:00</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Strefa Wsparcia - Marta Rokicińska. Wszystkie prawa zastrzeżone.
              </p>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Polityka prywatności
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Klauzula RODO
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Regulamin
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent-soft/50 rounded-2xl">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                <strong>Ważne:</strong> Treści zawarte na tej stronie mają charakter informacyjny i nie stanowią 
                porady medycznej ani psychologicznej. W przypadku problemów zdrowotnych należy skonsultować się 
                z lekarzem lub wykwalifikowanym specjalistą. Psychoterapia nie zastępuje leczenia psychiatrycznego 
                ani farmakologicznego.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
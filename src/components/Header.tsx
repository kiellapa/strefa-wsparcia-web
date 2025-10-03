import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- ZAKTUALIZOWANY IMPORT
import logo from "@/assets/logo1_150.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // <-- POBIERZ AKTUALNĄ LOKALIZACJĘ
  const navigate = useNavigate(); // <-- POBIERZ FUNKCJĘ NAWIGACJI
  const isHomePage = location.pathname === '/';
  
  // V-- ZAKTUALIZOWANA FUNKCJA --V
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Zawsze zamykaj menu mobilne po kliknięciu
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // ^-- KONIEC AKTUALIZACJI --^

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Strefa Wsparcia Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-xl font-light text-foreground tracking-wide">
                Strefa Wsparcia
              </span>
              <span className="text-sm text-primary font-medium -mt-1">
                Marta Rokicińska
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              O mnie
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              Oferta
            </button>
            <button 
              onClick={() => scrollToSection('approach')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              Podejście
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              Opinie
            </button>
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                Blog
              </button>
            ) : (
              <Link 
                to="/blog"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                Blog
              </Link>
            )}
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              Kontakt
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2 rounded-3xl font-medium text-sm transition-all duration-300"
            >
              Umów wizytę
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                O mnie
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Oferta
              </button>
              <button 
                onClick={() => scrollToSection('approach')}
                className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Podejście
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Opinie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Kontakt
              </button>
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Blog
                </button>
              ) : (
                <Link 
                  to="/blog"
                  className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Blog
                </Link>
              )}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="md:hidden mt-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-3xl font-medium text-sm"
              >
                Umów wizytę
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
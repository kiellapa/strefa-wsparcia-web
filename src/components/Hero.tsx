import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import watercolorHeroBg from "@/assets/watercolor-hero-bg.jpg";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with organic overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${watercolorHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero/70" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Organic floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-clay-soft/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-moss-soft/20 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
        {/* Left Column - Text Content */}
        <div className="text-left animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-clay-soft/70 px-4 py-2 rounded-full mb-8 animate-gentle-pulse backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Profesjonalna psychoterapia</span>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in-up animate-delay-100 drop-shadow-lg">
              <span className="block font-serif">Strefa</span>
              <span className="block text-primary font-medium">Wsparcia</span>
            </h1>
            
            <div className="animate-slide-in-left animate-delay-200">
              <p className="text-base sm:text-lg text-primary font-medium mb-2 drop-shadow-md">
                Marta Rokicińska
              </p>
              <p className="text-lg sm:text-xl text-foreground leading-relaxed drop-shadow-md">
                Pomagam odnaleźć równowagę, odporność i spokój w codziennym życiu.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 animate-scale-in animate-delay-300">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-3xl font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift w-full sm:w-auto"
            >
              Umów pierwszą wizytę
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-3xl font-medium text-base sm:text-lg transition-all duration-300 hover-lift w-full sm:w-auto"
            >
              Poznaj moje podejście
            </Button>
          </div>
          
          {/* Stats - with scientific credibility */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 animate-fade-in animate-delay-400">
            <div className="research-badge">
              <div className="text-xl sm:text-2xl font-bold text-foreground">13+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Lata doświadczenia</div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-border"></div>
            <div className="research-badge">
              <div className="text-xl sm:text-2xl font-bold text-foreground">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Dotychczasowych klientów terapeutycznych</div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-border"></div>
            <div className="research-badge">
              <div className="text-xl sm:text-2xl font-bold text-foreground">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Godzin szkoleń</div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-border"></div>
            <div className="research-badge">
              <div className="text-xl sm:text-2xl font-bold text-foreground">24h</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Odpowiedź na email</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Visual Element */}
        <div className="relative hidden lg:block animate-scale-in animate-delay-300">
          <div className="relative">
            {/* Main organic shape */}
            <div className="w-96 h-96 bg-gradient-organic rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl relative overflow-hidden">
              {/* Profile photo */}
              <div className="absolute inset-8 rounded-[50%_50%_50%_50%/60%_40%_60%_40%] overflow-hidden">
                <img 
                  src={therapistPortrait} 
                  alt="Marta Rokicińska - Psychoterapeutka"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-clay-soft rounded-[60%_40%_30%_70%] shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-moss-soft rounded-[40%_60%_70%_30%] shadow-lg animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import organicHeroBg from "@/assets/organic-hero-bg.jpg";

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
        style={{ backgroundImage: `url(${organicHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero/40" />
      
      {/* Organic floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-clay-soft/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-moss-soft/20 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Column - Text Content */}
        <div className="text-left">
          <div className="inline-flex items-center space-x-2 bg-clay-soft/50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Profesjonalna psychoterapia</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
            <span className="block font-serif">Strefa</span>
            <span className="block text-primary font-medium">Wsparcia</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-primary font-medium mb-2">
              Marta Rokicińska
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Pomagam odnaleźć równowagę, odporność i spokój w codziennym życiu.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Umów pierwszą wizytę
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg transition-all duration-300"
            >
              Poznaj moje podejście
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-8">
            <div>
              <div className="text-2xl font-bold text-foreground">3+</div>
              <div className="text-sm text-muted-foreground">Lata doświadczenia</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div>
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Odpowiedź na email</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative">
            {/* Main organic shape */}
            <div className="w-96 h-96 bg-gradient-organic rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl relative overflow-hidden">
              {/* Inner decorative elements */}
              <div className="absolute inset-8 bg-card/50 rounded-[50%_50%_50%_50%/60%_40%_60%_40%] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Bezpieczna przestrzeń<br />dla Twojego wzrostu</p>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-clay-soft rounded-[60%_40%_30%_70%] shadow-lg"></div>
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-moss-soft rounded-[40%_60%_70%_30%] shadow-lg"></div>
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
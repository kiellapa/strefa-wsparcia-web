import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Lightbulb, Target, Compass } from "lucide-react";

const Approach = () => {
  const methodologies = [
    {
      title: "CBT",
      fullName: "Terapia Poznawczo-Behawioralna",
      description: "Praca z automatycznymi myślami i zachowaniami, które wpływają na nasze samopoczucie.",
      color: "primary"
    },
    {
      title: "ACT",
      fullName: "Terapia Akceptacji i Zaangażowania", 
      description: "Rozwijanie elastyczności psychologicznej i życie zgodnie z własnymi wartościami.",
      color: "accent"
    },
    {
      title: "ST",
      fullName: "Terapia Schematów",
      description: "Praca z głęboko zakorzenionymi wzorcami z dzieciństwa i wczesnej dorosłości.",
      color: "clay"
    }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Empatia bez oceniania",
      description: "Tworzę przestrzeń pełną zrozumienia, gdzie możesz być autentyczny"
    },
    {
      icon: Brain,
      title: "Dowody naukowe",
      description: "Wykorzystuję metody potwierdzone badaniami i dostosowuję je do Ciebie"
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo",
      description: "Dbam o Twój komfort i zachowuję pełną poufność"
    },
    {
      icon: Target,
      title: "Konkretne cele",
      description: "Wspólnie ustalamy jasne kierunki i mierzymy postępy"
    },
    {
      icon: Compass,
      title: "Twoje tempo",
      description: "Szanujemy Twój rytm i dostosowujemy proces do Twoich możliwości"
    },
    {
      icon: Lightbulb,
      title: "Twoje zasoby",
      description: "Odkrywamy i wzmacniamy Twoje naturalne mocne strony"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Poznanie",
      description: "Pierwszy kontakt, zdefiniowanie problemu i oczekiwań"
    },
    {
      number: "02", 
      title: "Zrozumienie",
      description: "Wspólne ustalenie celów i planu terapii"
    },
    {
      number: "03",
      title: "Praca",
      description: "Regularne sesje, nauka nowych strategii radzenia sobie"
    },
    {
      number: "04",
      title: "Zmiana",
      description: "Utrwalanie pozytywnych zmian i przygotowanie do zakończenia"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
            Metodologia
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-8 font-serif max-w-3xl mx-auto">
            Moje podejście do terapii
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Łączę różne sprawdzone metody, dostosowując je indywidualnie do Twoich potrzeb i sytuacji życiowej.
          </p>
        </div>

        {/* Methodologies */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-foreground mb-12 text-center font-serif">
            Główne nurty, z których korzystam
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <Card key={index} className="p-8 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 group text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-foreground ${
                  method.color === 'primary' ? 'bg-primary' :
                  method.color === 'accent' ? 'bg-accent' : 'bg-clay'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {method.title}
                </div>
                
                <h4 className="text-xl font-medium text-foreground mb-3">
                  {method.fullName}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-foreground mb-12 text-center font-serif">
            Zasady mojej pracy
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-moss-soft rounded-2xl flex items-center justify-center mb-4 group-hover:bg-moss group-hover:text-moss-soft transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg font-medium text-foreground mb-2">
                    {principle.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process flow */}
        <Card className="p-12 bg-gradient-earth rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-foreground mb-4 font-serif">
              Jak przebiega proces terapii?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Każda droga jest inna, ale zazwyczaj przechodzi przez podobne etapy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto text-lg font-bold">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border/30 -ml-8"></div>
                  )}
                </div>
                
                <h4 className="text-lg font-medium text-foreground mb-3">
                  {step.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              <strong>Pamiętaj:</strong> Terapia to proces, który wymaga czasu. 
              Pierwsze pozytywne zmiany mogą być jednak widoczne już po kilku sesjach.
            </p>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Rozpocznijmy razem
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Approach;
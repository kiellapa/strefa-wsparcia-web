import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Monitor, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia indywidualna",
      description: "Praca jeden na jeden w bezpiecznej przestrzeni. Pomagam w radzeniu sobie z lękiem, depresją, problemami w relacjach oraz trudnościami życiowymi.",
      benefits: [
        "Indywidualne podejście",
        "Bezpieczna przestrzeń",
        "Elastyczne terminy"
      ]
    },
    {
      icon: Users,
      title: "Terapia par",
      description: "Wsparcie dla par w kryzysie, poprawie komunikacji oraz budowaniu zdrowszych relacji. Praca nad zaufaniem i bliskością.",
      benefits: [
        "Poprawa komunikacji",
        "Rozwiązywanie konfliktów",
        "Budowanie bliskości"
      ]
    },
    {
      icon: Monitor,
      title: "Sesje online",
      description: "Profesjonalna pomoc psychologiczna przez internet. Wygodne i skuteczne rozwiązanie dla osób z ograniczonym czasem lub mieszkających daleko.",
      benefits: [
        "Wygoda i komfort",
        "Oszczędność czasu",
        "Taka sama skuteczność"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Oferta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dostosowuję formę terapii do Twoich indywidualnych potrzeb i preferencji
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 bg-card border-border/50 rounded-3xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 py-6 text-lg font-medium inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Porozmawiajmy o Twoich potrzebach</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
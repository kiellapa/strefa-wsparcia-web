import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Users, Monitor, Clock, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia indywidualna",
      price: "Od 250 zł",
      duration: "50 min",
      description: "Praca jeden na jeden w bezpiecznej przestrzeni gabinetu",
      features: [
        "Lęk i zaburzenia nastroju",
        "Problemy w relacjach",
        "Kryzys życiowy, depresja",
        "Trauma i PTSD",
        "ADHD",
        "Spektrum autyzmu",
      ],
      highlight: true
    },
    {
      icon: Users,
      title: "Terapia uzależnień",
      price: "Od 250 zł",
      duration: "50 min",
      description: "Wsparcie w walce z uzależnieniem, zrozumienie problemu i skuteczne budowanie pozytywnych zmian",
      features: [
        "Skuteczne metody walki z uzależnieniem", 
        "Budowanie zdrowych nawyków",
        "Planowanie przyszłości"
      ],
      highlight: false
    },
    {
      icon: Monitor,
      title: "Sesje online",
      price: "Od 250 zł",
      duration: "50 min",
      description: "Profesjonalna pomoc psychologiczna przez bezpieczną platformę (Zoom, Meet)",
      features: [
        "Wygoda własnego domu",
        "Elastyczne terminy",
        "Oszczędność czasu",
        "Bezpieczne połączenie i dyskrecja",
        "Taka sama skuteczność"
      ],
      highlight: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-secondary-warm/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Magazine-style header */}
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
                Oferta
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 font-serif">
                Jak mogę<br />Ci pomóc?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dostosowuję formę terapii do Twoich indywidualnych potrzeb, 
                preferencji i możliwości.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className={`p-8 border-0 rounded-3xl transition-all duration-300 hover:shadow-2xl group relative overflow-hidden ${
                      service.highlight 
                        ? 'bg-gradient-earth shadow-xl' 
                        : 'bg-card hover:shadow-lg'
                    }`}
                  >
                    {service.highlight && (
                      <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                        Popularne
                      </Badge>
                    )}
                    
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      {/* Service info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            service.highlight 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-accent-soft text-accent-dark group-hover:bg-accent group-hover:text-accent-foreground'
                          } transition-colors duration-300`}>
                            <IconComponent className="w-7 h-7" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-medium text-foreground mb-2">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-accent" />
                                <span className="text-muted-foreground">{service.duration}</span>
                              </div>
                              <div className="font-medium text-primary text-lg">
                                {service.price}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex md:justify-end">
                        <Button
                          onClick={scrollToContact}
                          className={`px-6 py-3 rounded-3xl font-medium transition-all duration-300 ${
                            service.highlight
                              ? 'bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl'
                              : 'bg-accent hover:bg-accent-dark text-accent-foreground'
                          }`}
                        >
                          Umów się
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA section */}
        <Card className="p-12 bg-gradient-organic rounded-3xl text-center">
          <h3 className="text-3xl font-light text-foreground mb-4 font-serif">
            Nie wiesz, która forma jest dla Ciebie?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Zapraszam na bezpłatną 15-minutową konsultację telefoniczną, 
            podczas której wspólnie ustalimy najlepszą formę pomocy. Napisz do mnie lub zadzwoń, aby się umówić.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Bezpłatna konsultacja</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              lub zadzwoń (w godzinach 19:00-20:00): <span className="font-medium text-foreground">+48 668 207 872</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
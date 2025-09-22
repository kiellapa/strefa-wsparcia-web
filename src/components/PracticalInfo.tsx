import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Globe, Calendar, Phone, Mail, CreditCard, Shield } from "lucide-react";

const PracticalInfo = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const practicalDetails = [
    {
      icon: Clock,
      title: "Czas trwania",
      details: [
        "Sesja indywidualna: 60 minut",
        "Pierwsza konsultacja: do 60 minut",
        "Konsultacja telefoniczna: 15 minut (bezpłatna)"
      ]
    },
    {
      icon: Calendar,
      title: "Dostępność",
      details: [
        "Poniedziałek - Piątek: 9:00 - 18:00",
        "Sobota: 10:00 - 14:00 (online)",
        "Wieczorne terminy: do uzgodnienia",
        "Możliwość sesji w weekend"
      ]
    },
    {
      icon: Globe,
      title: "Języki i formy",
      details: [
        "Język polski",
        "Sesje stacjonarne w gabinecie",
        "Sesje online (platforma Zoom, Meet)"
      ]
    },
    {
      icon: CreditCard,
      title: "Płatności",
      details: [
        "Gotówka w gabinecie",
        "Przelew bankowy",
        "BLIK i karty płatnicze",
        "Możliwość faktury VAT"
      ]
    }
  ];

  return (
    <section className="py-24 bg-clay-soft/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left column - Location */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
                Lokalizacja
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-8 font-serif">
                Informacje praktyczne
              </h2>
              
              <Card className="p-8 bg-card border-border/30 rounded-3xl mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Gabinet w Warszawie</h3>
                    <p className="text-muted-foreground text-lg">
                    Juliana Ursyna Niemcewicza 7/9, lok. 81<br />
                    02-022 Warszawa
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Wygodny dojazd - 10 min. tramwajem od Metro Centrum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Parkowanie płatne przy ul. Niemcewicza</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Dyskretne wejście</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Wygodny i przytulny gabinet</span>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <a 
                  href="https://maps.app.goo.gl/QgMfk81k5E9HEYZ68" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="bg-gradient-organic rounded-2xl h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                      <p className="font-medium text-foreground">Google maps</p>
                      <p className="text-sm text-muted-foreground">Juliana Ursyna Niemcewicza 7/9, Warszawa</p>
                    </div>
                  </div>
                </a>
              </Card>

              {/* Quick contact */}
              <Card className="p-6 bg-gradient-earth border-0 rounded-3xl">
                <h4 className="text-lg font-medium text-foreground mb-4 flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Szybki kontakt</span>
                </h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">+48 668 207 872 (19:00 - 20:00)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">kontakt@strefawsparcia.com</span>
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-3xl font-medium"
                >
                  Formularz kontaktowy
                </Button>
              </Card>
            </div>
          </div>
          
          {/* Right column - Details */}
          <div className="lg:col-span-7">
            
            <div className="grid gap-8 mb-12">
              {practicalDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <Card key={index} className="p-8 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-accent" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-foreground mb-4">
                          {detail.title}
                        </h3>
                        
                        <div className="grid sm:grid-cols-2 gap-3">
                          {detail.details.map((item, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Important info */}
            <Card className="p-8 bg-moss-soft/30 border-border/30 rounded-3xl mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-moss/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-moss" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Ważne informacje</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Przed pierwszą wizytą wyślę Ci krótki formularz oraz informacje o zasadach terapii
                  </p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="border-moss/30 text-moss mb-2">Przed wizytą</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Formularz wstępny (online)</li>
                    <li>• Zgoda na przetwarzanie danych</li>
                    <li>• Krótka rozmowa telefoniczna</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-moss/30 text-moss mb-2">Polityka anulowania</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anulowanie: 24h wcześniej</li>
                    <li>• Przełożenie: bez dodatkowych opłat</li>
                    <li>• Nagłe przypadki: do uzgodnienia</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-8 bg-gradient-warm rounded-3xl text-center">
              <h3 className="text-2xl font-light text-foreground mb-4 font-serif">
                Gotowy/a na pierwszy krok?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Zapraszam do kontaktu. Odpowiem na wszystkie pytania i pomogę wybrać 
                najlepszą formę współpracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg"
                >
                  Umów się na wizytę
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg"
                >
                  Bezpłatna konsultacja
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Globe, Calendar, Phone, Mail } from "lucide-react";

const PracticalInfo = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Informacje praktyczne
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wszystko co musisz wiedzieć przed pierwszą wizytą
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location and Map */}
            <div>
              <Card className="p-8 bg-card border-border/50 rounded-3xl h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Lokalizacja gabinetu</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Warszawa</strong><br />
                    ul. Markowska 22
                  </p>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>• Dogodny dojazd komunikacją publiczną</p>
                    <p>• Miejsca parkingowe w pobliżu</p>
                    <p>• Dyskretne wejście do gabinetu</p>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="bg-gradient-soft rounded-2xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground font-medium">Mapa Google</p>
                    <p className="text-sm text-muted-foreground">ul. Markowska 22, Warszawa</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Session Details */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Czas trwania sesji</h4>
                </div>
                <p className="text-muted-foreground">
                  Standardowa sesja trwa 50 minut. Pierwsze spotkanie może trwać do 60 minut.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Dostępność</h4>
                </div>
                <p className="text-muted-foreground">
                  Poniedziałek - Piątek: 9:00 - 18:00<br />
                  Sobota: 10:00 - 14:00 (sesje online)
                </p>
              </Card>

              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Języki</h4>
                </div>
                <p className="text-muted-foreground">
                  Sesje prowadzę w języku polskim oraz angielskim.
                </p>
              </Card>

              <Card className="p-6 bg-primary-soft border-border/50 rounded-3xl">
                <h4 className="text-lg font-semibold text-foreground mb-4">Umów się na wizytę</h4>
                <p className="text-muted-foreground mb-6">
                  Skontaktuj się ze mną, aby umówić się na bezpłatną konsultację telefoniczną 
                  lub pierwszą sesję.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl"
                  >
                    Formularz kontaktowy
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+48 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>kontakt@strefawsparcia.pl</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
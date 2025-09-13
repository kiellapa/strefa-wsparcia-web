import { Card } from "@/components/ui/card";
import { CheckCircle, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-soft rounded-3xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-accent" />
                  </div>
                  <p className="text-muted-foreground">Zdjęcie portretowe</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                O mnie
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Jestem psychoterapeutką z wieloletnim doświadczeniem w pomocy osobom 
                  w trudnych momentach życia. Ukończyłam studia psychologiczne oraz 
                  liczne szkolenia z zakresu psychoterapii.
                </p>
                
                <p className="text-lg">
                  Specjalizuję się w pracy z dorosłymi, parami oraz prowadzeniu sesji online. 
                  Moje podejście opiera się na metodach opartych na dowodach naukowych 
                  i indywidualnym dostosowaniu terapii do potrzeb każdego klienta.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-medium text-foreground mb-6">
                  Moje podejście terapeutyczne:
                </h3>
                
                <div className="grid gap-4">
                  <Card className="p-4 bg-card border-border/50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">CBT (Terapia Poznawczo-Behawioralna)</h4>
                        <p className="text-sm text-muted-foreground">Praca z myślami i zachowaniami</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-card border-border/50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">ACT (Terapia Akceptacji i Zaangażowania)</h4>
                        <p className="text-sm text-muted-foreground">Akceptacja i mindfulness</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-card border-border/50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">Terapia Schematów</h4>
                        <p className="text-sm text-muted-foreground">Praca z głębokimi wzorcami</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
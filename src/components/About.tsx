import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Users, Award } from "lucide-react";

const About = () => {
  const credentials = [
    "Terapia Poznawczo-Behawioralna",
    "ACT - Akceptacja i Zaangażowanie", 
    "Terapia Schematów",
    "Terapia Par"
  ];

  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Każda osoba zasługuje na zrozumienie"
    },
    {
      icon: BookOpen,
      title: "Nauka",
      description: "Metody oparte na najnowszych badaniach"
    },
    {
      icon: Users,
      title: "Relacja",
      description: "Terapia to wspólna podróż ku zmianie"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Magazine-style layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left column - Portrait and intro */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              {/* Portrait placeholder with organic shape */}
              <div className="relative mb-8">
                <div className="aspect-[4/5] bg-gradient-earth rounded-[2rem_1rem_2rem_1rem] shadow-2xl overflow-hidden">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Heart className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-medium">Marta Rokicińska</p>
                      <p className="text-sm text-muted-foreground mt-2">Zdjęcie portretowe</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-moss-soft rounded-[60%_40%_30%_70%] shadow-lg"></div>
              </div>

              {/* Quick credentials */}
              <Card className="p-6 bg-clay-soft/30 border-0 rounded-3xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-foreground">Kwalifikacje</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((cred, index) => (
                    <Badge key={index} variant="secondary" className="bg-card text-card-foreground text-xs px-3 py-1 rounded-full">
                      {cred}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right column - Main content */}
          <div className="lg:col-span-7">
            
            {/* Section header */}
            <div className="mb-12">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
                  Kim jestem
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 font-serif">
                  O mnie
                </h2>
              </div>
            </div>
            
            {/* Main story */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jestem psychoterapeutką z wieloletnim doświadczeniem w pomocy osobom 
                w trudnych momentach życia. Moja droga do psychoterapii rozpoczęła się 
                od fascynacji ludzką psychiką i chęci niesienia pomocy.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ukończyłam studia psychologiczne oraz liczne szkolenia z zakresu psychoterapii. 
                Specjalizuję się w pracy z dorosłymi, parami oraz prowadzeniu sesji online. 
                W swojej praktyce łączę różne podejścia terapeutyczne, dostosowując je 
                indywidualnie do potrzeb każdego klienta.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wierzę, że każda osoba ma w sobie potencjał do zmiany i wzrostu. 
                Moja rola to towarzyszenie Ci w odkrywaniu własnych zasobów i budowaniu 
                zdrowszych wzorców myślenia i zachowania.
              </p>
            </div>
            
            {/* Values grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-foreground mb-8 font-serif">
                Moje wartości w pracy
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="p-6 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 group">
                      <div className="w-12 h-12 bg-accent-soft rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-medium text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            {/* Call to action */}
            <Card className="p-8 bg-gradient-warm rounded-3xl">
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Chcesz poznać moje podejście?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Każda terapia zaczyna się od rozmowy. Umów się na bezpłatną konsultację.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-3xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Bezpłatna konsultacja
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  BookOpen, 
  Users, 
  Award,
  GraduationCap,
  Shield
} from "lucide-react";
import therapistPortrait from "@/assets/therapist-portrait.jpg";
import therapyOffice from "@/assets/therapy-office.jpg";

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
    <section id="about" className="py-24 bg-secondary-warm/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
            O mnie
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-8 font-serif max-w-3xl mx-auto">
            Jestem tu, aby Ci pomóc
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Psychoterapia to podróż ku lepszemu zrozumieniu siebie i odnalezieniu wewnętrznej siły.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left column - Photo */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/5] bg-gradient-organic rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src={therapistPortrait} 
                alt="Marta Rokicińska - Psychoterapeuta"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Scientific credibility badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg research-badge">
              <div className="text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xs font-medium">Certyfikowana</div>
                <div className="text-xs">Terapeutka</div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-moss-soft rounded-2xl shadow-lg animate-float"></div>
          </div>

          {/* Right column - Bio content */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-4 font-serif">
                Witaj, jestem Marta
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jestem psychoterapeutką z kilkuletnim doświadczeniem w pracy z osobami 
                dorosłymi. Specjalizuję się w terapii poznawczo-behawioralnej (CBT), 
                terapii akceptacji i zaangażowania (ACT) oraz terapii schematów.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wierzę, że każdy człowiek ma w sobie siłę do zmiany i wzrostu. 
                Moją rolą jest towarzyszenie Ci w tej podróży i dostarczanie narzędzi, 
                które pomogą Ci osiągnąć większą równowagę i spokój w życiu.
              </p>
            </div>
            
            {/* Scientific approach highlight */}
            <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Podejście oparte na nauce</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wszystkie metody, które stosuję, są poparte solidnymi badaniami naukowymi 
                    i uznane za skuteczne przez międzynarodowe organizacje psychoterapeutyczne.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Credentials */}
            <div className="flex flex-wrap gap-2">
              {credentials.map((cred, index) => (
                <Badge key={index} variant="secondary" className="bg-clay-soft text-clay px-3 py-1 rounded-full text-xs">
                  {cred}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Values grid - more minimal */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 group text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Section with office environment */}
        <Card className="bg-gradient-earth rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img 
                src={therapyOffice} 
                alt="Gabinet terapeutyczny - spokojne i bezpieczne miejsce"
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-clay/20"></div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-light text-foreground mb-6 font-serif">
                Gotowy na pierwszą rozmowę?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Zapraszam Cię do bezpiecznej przestrzeni, gdzie możesz być sobą i pracować nad swoim rozwojem.
              </p>
              
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Umów bezpłatną konsultację
                </Button>
                
                <Button 
                  onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-3xl font-medium text-lg transition-all duration-300"
                >
                  Poznaj moje podejście
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
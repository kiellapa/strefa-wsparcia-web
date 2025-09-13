import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Lightbulb } from "lucide-react";

const Approach = () => {
  const principles = [
    {
      icon: Heart,
      title: "Empatia i zrozumienie",
      description: "Tworzę bezpieczną przestrzeń pełną akceptacji, gdzie możesz być sobą bez osądzania."
    },
    {
      icon: Brain,
      title: "Metody oparte na dowodach",
      description: "Wykorzystuję sprawdzone naukowo techniki terapeutyczne dostosowane do Twoich potrzeb."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo i zaufanie",
      description: "Zachowuję pełną poufność i dbam o to, abyś czuł/a się komfortowo w trakcie sesji."
    },
    {
      icon: Lightbulb,
      title: "Indywidualne podejście",
      description: "Każda osoba jest wyjątkowa - dostosowuję terapię do Twojej sytuacji i celów."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Moje podejście terapeutyczne
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Wierzę, że każda osoba ma w sobie potencjał do zmiany i wzrostu. 
              Moja rola to towarzyszenie Ci w odkrywaniu własnych zasobów i budowaniu 
              zdrowszych wzorców myślenia i zachowania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border/50 rounded-3xl text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-soft rounded-3xl">
            <div className="text-center">
              <h3 className="text-2xl font-light text-foreground mb-6">
                Jak wygląda praca ze mną?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-semibold">
                    1
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Pierwsze spotkanie</h4>
                  <p className="text-sm text-muted-foreground">
                    Poznajemy się, rozmawiamy o Twoich potrzebach i celach terapii.
                  </p>
                </div>
                
                <div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-semibold">
                    2
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Plan terapii</h4>
                  <p className="text-sm text-muted-foreground">
                    Wspólnie ustalamy plan działania i wybieramy odpowiednie metody.
                  </p>
                </div>
                
                <div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-semibold">
                    3
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Praca nad zmianą</h4>
                  <p className="text-sm text-muted-foreground">
                    Regularnie spotykamy się i pracujemy nad osiągnięciem Twoich celów.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;
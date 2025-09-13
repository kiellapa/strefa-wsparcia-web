import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Terapia z Martą była przełomem w moim życiu. Nauczyłam się rozumieć swoje emocje i radzić sobie ze stresem. Czuję się silniejsza i bardziej świadoma siebie.",
      author: "Anna, 28 lat",
      type: "Terapia indywidualna",
      rating: 5,
      featured: true
    },
    {
      content: "Bardzo profesjonalne podejście i empatia. Dzięki terapii par nasza relacja przeszła prawdziwą transformację. Nauczyliśmy się słuchać siebie nawzajem.",
      author: "Tomasz i Maja, para",
      type: "Terapia par",
      rating: 5,
      featured: false
    },
    {
      content: "Sesje online okazały się zaskakująco efektywne. Marta potrafi stworzyć bezpieczną atmosferę nawet przez ekran. Oszczędność czasu to dodatkowy plus.",
      author: "Karolina, 35 lat",
      type: "Sesje online",
      rating: 5,
      featured: false
    },
    {
      content: "Po wielu latach problemów z lękiem, wreszcie znalazłam pomoc, która działa. Marta używa konkretnych technik, które mogę stosować na co dzień.",
      author: "Paulina, 24 lata", 
      type: "Terapia indywidualna",
      rating: 5,
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Zadowolonych klientów", icon: Heart },
    { number: "3+", label: "Lata doświadczenia", icon: Star },
    { number: "95%", label: "Rekomendacji", icon: Quote }
  ];

  return (
    <section id="testimonials" className="py-24 bg-moss-soft/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
            Opinie
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-8 font-serif">
            Co mówią moi klienci
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Najważniejsza dla mnie jest satysfakcja i postępy osób, którym miałam przyjemność pomagać
          </p>
        </div>

        {/* Featured testimonial */}
        {testimonials.filter(t => t.featured).map((testimonial, index) => (
          <Card key={index} className="p-12 bg-gradient-warm rounded-3xl mb-16 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/10 rounded-full"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-primary mx-auto mb-8" />
              
              <blockquote className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed font-serif">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent mx-0.5" />
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="font-medium text-foreground text-lg">
                  {testimonial.author}
                </p>
                <Badge variant="secondary" className="bg-clay-soft text-clay px-3 py-1 rounded-full text-sm">
                  {testimonial.type}
                </Badge>
              </div>
            </div>
          </Card>
        ))}

        {/* Other testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 w-6 h-6 text-accent/30" />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-medium text-foreground mb-1">
                  {testimonial.author}
                </p>
                <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                  {testimonial.type}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-8 bg-card border-border/30 rounded-3xl text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <Card className="p-6 bg-stone-soft/50 border-border/30 rounded-2xl mt-12 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <strong>Uwaga o prywatności:</strong> Wszystkie opinie są anonimowe i publikowane 
            za zgodą klientów. Szanuję prywatność każdej osoby korzystającej z mojej pomocy.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;

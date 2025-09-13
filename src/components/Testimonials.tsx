import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Terapia z Martą pomogła mi zrozumieć swoje emocje i nauczyć się radzić sobie ze stresem. Czuję się znacznie silniejsza i bardziej pewna siebie.",
      author: "Anna, 28 lat",
      rating: 5
    },
    {
      content: "Profesjonalne podejście, empatia i skuteczne metody. Dzięki terapii par nasza relacja stała się mocniejsza niż kiedykolwiek wcześniej.",
      author: "Tomasz i Maja",
      rating: 5
    },
    {
      content: "Sesje online okazały się bardzo wygodne i skuteczne. Marta potrafi stworzyć bezpieczną atmosferę nawet przez ekran. Polecam!",
      author: "Karolina, 35 lat",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Opinie klientów
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oto co mówią osoby, którym miałam przyjemność pomagać
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border/50 rounded-3xl hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary-soft" />
                </div>
                
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-accent-soft border-border/50 rounded-2xl max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                Wszystkie opinie są anonimowe i publikowane za zgodą klientów
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">Zadowolonych klientów</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">3+</div>
                  <div className="text-xs text-muted-foreground">Lata doświadczenia</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
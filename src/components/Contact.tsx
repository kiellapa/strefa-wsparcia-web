import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Heart } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'pierwsza-wizyta',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Zastąp ten URL adresem swojej strony
      const response = await fetch("https://strefawsparcia.com/send-email.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast({
          title: "Wiadomość wysłana",
          description: "Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.",
        });
        setFormData({
          name: '', email: '', phone: '', subject: 'pierwsza-wizyta', message: '', preferredContact: 'email'
        });
      } else {
        toast({
          title: "Błąd",
          description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
      toast({
          title: "Błąd sieci",
          description: "Sprawdź swoje połączenie internetowe.",
          variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon lub sms",
      value: "+48 668 207 872",
      description: "Pon-Pt: 9:00-17:00",
      action: "Zadzwoń teraz"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "kontakt@strefawsparcia.com",
      description: "Odpowiedź w 24h",
      action: "Napisz email"
    },
    {
      icon: MessageCircle,
      title: "Bezpłatna konsultacja",
      value: "15 minut",
      description: "Telefonicznie",
      action: "Umów rozmowę"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
            Kontakt
          </span>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-8 font-serif">
            Porozmawiajmy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pierwszy krok jest zawsze najtrudniejszy. Jestem tu, żeby go ułatwić. 
            Skontaktuj się ze mną w sposób, który jest dla Ciebie najwygodniejszy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Contact methods */}
          <div className="lg:col-span-4">
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="p-6 bg-card border-border/30 rounded-3xl hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
                        <p className="text-foreground font-medium text-lg mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        <button className="text-sm text-primary hover:text-primary-dark font-medium">
                          {method.action} →
                        </button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Office info */}
            <Card className="p-6 bg-gradient-earth border-0 rounded-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-foreground">Gabinet</h3>
              </div>
              
              <p className="text-foreground mb-2">ul. Juliana Ursyna Niemcewicza 7/9</p>
              <p className="text-foreground mb-4">02-022 Warszawa</p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Pon-Pt: 9:00-18:00, Sob: 10:00-14:00</span>
              </div>
            </Card>

            {/* Trust badge */}
            <Card className="p-6 bg-moss-soft/30 border-border/30 rounded-3xl mt-6">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-moss" />
                <h4 className="font-medium text-foreground">Bezpieczna przestrzeń</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zapewniam pełną poufność i profesjonalizm. Twoja prywatność 
                jest dla mnie priorytetem.
              </p>
            </Card>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-8">
            <Card className="p-8 bg-card border-border/30 rounded-3xl">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-foreground mb-2 font-serif">
                  Napisz do mnie
                </h3>
                <p className="text-muted-foreground">
                  Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Subject selection */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Jak mogę Ci pomóc? *
                  </Label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-3xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="pierwsza-wizyta">Chcę umówić pierwszą wizytę</option>
                    <option value="konsultacja">Bezpłatna konsultacja telefoniczna</option>
                    <option value="terapia-par">Terapia uzależnień</option>
                    <option value="sesje-online">Sesje online</option>
                    <option value="pytania">Mam pytania o terapię</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Imię *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-3xl border-border/50 py-3 focus:ring-2 focus:ring-primary"
                      placeholder="Twoje imię"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="rounded-3xl border-border/50 py-3 focus:ring-2 focus:ring-primary"
                      placeholder="+48 668 207 872"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-3xl border-border/50 py-3 focus:ring-2 focus:ring-primary"
                    placeholder="twoj@email.com"
                  />
                </div>

                {/* Preferred contact method */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Preferowany sposób kontaktu
                  </Label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-muted-foreground">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-muted-foreground">Telefon</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Wiadomość *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-3xl border-border/50 min-h-32 py-3 focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Opowiedz mi krótko o swojej sytuacji. Co Cię motywuje do szukania pomocy? Jak mogę Ci najlepiej pomóc?"
                  />
                </div>
                <div className="flex items-start space-x-3 items-center">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wyrażam zgodę na przetwarzanie danych, zgodnie z{" "}
                    <a href="/polityka-prywatnosci" target="_blank" className="text-primary underline hover:text-primary-dark">
                      Polityką Prywatności
                    </a>.
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-3xl py-6 text-lg font-medium inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Wyślij wiadomość</span>
                </Button>

                <div className="bg-stone-soft/50 p-4 rounded-2xl">
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Wypełniając formularz, akceptujesz{" "}
                    <button className="text-primary hover:underline font-medium">politykę prywatności</button>{" "}
                    i wyrażasz zgodę na przetwarzanie danych osobowych w celu udzielenia odpowiedzi. 
                    Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
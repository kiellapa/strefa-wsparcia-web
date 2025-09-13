import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Wiadomość wysłana",
      description: "Odpowiem na Twoją wiadomość w ciągu 24 godzin.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Kontakt
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zrobimy pierwszy krok razem. Napisz do mnie, a odpowiem najszybciej jak to możliwe.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon</h3>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dostępna od poniedziałku do piątku, 9:00-17:00
                </p>
              </Card>

              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">kontakt@strefawsparcia.pl</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Odpowiadam w ciągu 24 godzin
                </p>
              </Card>

              <Card className="p-6 bg-card border-border/50 rounded-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Adres</h3>
                    <p className="text-muted-foreground">ul. Markowska 22<br />Warszawa</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent-soft border-border/50 rounded-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold text-foreground">Bezpłatna konsultacja</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Oferuję 15-minutową bezpłatną konsultację telefoniczną, 
                  podczas której możemy porozmawiać o Twoich potrzebach.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border/50 rounded-3xl">
                <h3 className="text-2xl font-light text-foreground mb-6">
                  Napisz do mnie
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="rounded-2xl border-border/50"
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
                        className="rounded-2xl border-border/50"
                        placeholder="+48 123 456 789"
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
                      className="rounded-2xl border-border/50"
                      placeholder="twoj@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Temat
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="rounded-2xl border-border/50"
                      placeholder="Krótki temat wiadomości"
                    />
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
                      className="rounded-2xl border-border/50 min-h-32"
                      placeholder="Opowiedz mi o swojej sytuacji i jak mogę Ci pomóc..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-medium inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Wyślij wiadomość</span>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Wypełniając formularz, akceptujesz{" "}
                    <a href="#" className="text-primary hover:underline">politykę prywatności</a>{" "}
                    i wyrażasz zgodę na przetwarzanie danych osobowych.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
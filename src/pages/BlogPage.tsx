import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createWordPressService, BlogPost, fallbackPosts } from "@/services/wordpress";
import scientificResearch from "@/assets/scientific-research.jpg";

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["Wszystkie"]);
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // You'll need to replace this with your actual WordPress URL
  const WORDPRESS_URL = "https://www.strefawsparcia.com/"; // REPLACE WITH YOUR WORDPRESS URL

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const wordpressService = createWordPressService(WORDPRESS_URL);
        const fetchedPosts = await wordpressService.getPosts();
        
        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
          
          // Extract unique categories
          const uniqueCategories = ["Wszystkie", ...new Set(fetchedPosts.map(post => post.category))];
          setCategories(uniqueCategories);
        } else {
          // Use fallback posts with images
          const postsWithImages = fallbackPosts.map(post => ({
            ...post,
            image: post.featured ? scientificResearch : undefined
          }));
          setPosts(postsWithImages);
          setCategories(["Wszystkie", "Poradnik", "Nauka", "Praktyka"]);
        }
      } catch (error) {
        console.error("Error loading posts:", error);
        // Use fallback posts
        const postsWithImages = fallbackPosts.map(post => ({
          ...post,
          image: post.featured ? scientificResearch : undefined
        }));
        setPosts(postsWithImages);
        setCategories(["Wszystkie", "Poradnik", "Nauka", "Praktyka"]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== "Wszystkie") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie artykułów...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-moss-soft/50 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-moss" />
            <span className="text-sm text-moss font-medium">Blog terapeutyczny</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-light text-foreground mb-6 font-serif">
            Wszystkie artykuły
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Przeglądaj wszystkie artykuły oparte na najnowszych badaniach naukowych, praktyczne porady i wgląd w świat psychoterapii.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border-border/30 focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  category === selectedCategory 
                    ? "bg-primary text-primary-foreground hover:bg-primary-dark" 
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden rounded-3xl border-border/30 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {post.image && (
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          Wyróżnione
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      post.category === 'Nauka' ? 'bg-clay-soft text-clay' :
                      post.category === 'Praktyka' ? 'bg-moss-soft text-moss' :
                      'bg-accent-soft text-accent-dark'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-lg font-medium text-foreground mb-3 font-serif leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-dark font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nie znaleziono artykułów spełniających kryteria wyszukiwania.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <Card className="mt-16 bg-gradient-earth rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4 font-serif">
            Bądź na bieżąco z najnowszymi artykułami
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Otrzymuj powiadomienia o nowych artykułach i praktycznych poradach bezpośrednio na swoją skrzynkę email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Twój adres email"
              className="flex-1 rounded-3xl border-border bg-background text-foreground focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-3xl font-medium">
              Zapisz się
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage;
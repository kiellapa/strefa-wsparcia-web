import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { createWordPressService, BlogPost, fallbackPosts } from "@/services/wordpress";
import scientificResearch from "@/assets/scientific-research.jpg";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // You'll need to replace this with your actual WordPress URL
  const WORDPRESS_URL = "https://www.strefawsparcia.com/"; // REPLACE WITH YOUR WORDPRESS URL

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const wordpressService = createWordPressService(WORDPRESS_URL);
        const fetchedPosts = await wordpressService.getPosts(4); // Get only 4 posts for homepage
        
        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
        } else {
          // Use fallback posts with images
          const postsWithImages = fallbackPosts.map(post => ({
            ...post,
            image: post.featured ? scientificResearch : undefined
          }));
          setPosts(postsWithImages);
        }
      } catch (error) {
        console.error("Error loading posts:", error);
        // Use fallback posts
        const postsWithImages = fallbackPosts.map(post => ({
          ...post,
          image: post.featured ? scientificResearch : undefined
        }));
        setPosts(postsWithImages);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-moss-soft/50 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-moss" />
            <span className="text-sm text-moss font-medium">Blog terapeutyczny</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 font-serif">
            Wiedza i wsparcie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artykuły oparte na najnowszych badaniach naukowych, praktyczne porady i wgląd w świat psychoterapii.
          </p>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-12">
          <Link to="/blog">
            <Button 
              variant="outline"
              className="rounded-full px-8 py-3 text-sm font-medium border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Zobacz wszystkie artykuły
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie artykułów...</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            <div className="mb-16">
              {posts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden rounded-3xl border-border/30 group hover:shadow-xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Wyróżnione
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="bg-accent-soft text-accent-dark px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4 font-serif leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Button className="self-start bg-primary hover:bg-primary-dark text-primary-foreground rounded-3xl group-hover:shadow-lg transition-all duration-300">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

            {/* Other Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden rounded-3xl border-border/30 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
                
                <h3 className="text-lg font-medium text-foreground mb-3 font-serif leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
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
          </>
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
            <input 
              type="email" 
              placeholder="Twój adres email"
              className="flex-1 px-4 py-3 rounded-3xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-3xl font-medium">
              Zapisz się
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Blog;

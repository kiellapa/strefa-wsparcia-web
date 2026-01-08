import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createWordPressService, BlogPost, fallbackPosts } from "@/services/wordpress";
import { Calendar, Clock, ArrowLeft, Link as LinkIcon, Check } from "lucide-react";
import { Facebook, Linkedin, Twitter, Instagram } from "@/components/SocialIcons"; // Importuj stąd
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  const [isCopied, setIsCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareOnSocial = async (platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram') => {
    const text = post?.title || '';
    
    // Specjalna obsługa dla Instagrama (i ogólnie mobile native share)
    if (platform === 'instagram') {
      if (navigator.share) {
        try {
          await navigator.share({
            title: text,
            text: post?.excerpt || text,
            url: currentUrl,
          });
          return; // Jeśli się udało, kończymy
        } catch (error) {
          console.log('Anulowano udostępnianie lub błąd:', error);
        }
      }
      
      // Fallback dla Desktopu (kopiowanie linku)
      navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Link skopiowany!",
        description: "Instagram nie wspiera bezpośredniego udostępniania z web. Link został skopiowany do schowka – możesz go wkleić w aplikacji.",
      });
      return;
    }

    // Standardowa obsługa dla reszty (bez zmian)
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(text)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  }; 
  // Zastąp ten adres URL swoim adresem WordPressa
  const WORDPRESS_URL = "https://www.strefawsparcia.com/";

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const wordpressService = createWordPressService(WORDPRESS_URL);
        const fetchedPost = await wordpressService.getPost(parseInt(id, 10));
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error loading post:", error);
        // W przypadku błędu, spróbuj znaleźć post w danych zastępczynoch
        const fallback = fallbackPosts.find(p => p.id === parseInt(id, 10));
        setPost(fallback || null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Ładowanie artykułu...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Nie znaleziono posta</h1>
          <p className="text-muted-foreground mb-6">Przykro nam, ale artykuł, którego szukasz, nie istnieje.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do bloga
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <article>
          <header className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark font-medium mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do wszystkich artykułów
            </Link>
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              {post.categories.map((cat, index) => (
              <span 
                key={index} 
                className="bg-moss-soft/50 px-3 py-1 rounded-full text-sm text-moss font-medium"
              >
                {cat}
              </span>
              ))}
            </div>
          </header>

          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-3xl object-cover mb-8"
            />
          )}

          <div 
            className="prose lg:prose-xl max-w-none text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          <div className="my-12 py-8 border-y border-border/30">
            <h3 className="text-lg font-serif text-foreground mb-4">Udostępnij ten artykuł:</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                onClick={() => shareOnSocial('facebook')}
                className="rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareOnSocial('instagram')}
                className="rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-[#dc2743] transition-all"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareOnSocial('linkedin')}
                className="rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareOnSocial('twitter')}
                className="rounded-full hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button 
                variant="outline" 
                onClick={handleCopyLink}
                className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {isCopied ? <Check className="w-4 h-4 mr-2" /> : <LinkIcon className="w-4 h-4 mr-2" />}
                {isCopied ? "Skopiowano" : "Kopiuj link"}
              </Button>
            </div>
          </div>          
          {/* DODANA SEKCJA TAGÓW vvv */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 border-t border-border/30 pt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Tagi:</span>
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent-soft text-accent-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* DODANA SEKCJA TAGÓW ^^^ */}
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createWordPressService, BlogPost, fallbackPosts } from "@/services/wordpress";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

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
        // W przypadku błędu, spróbuj znaleźć post w danych zastępczych
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
              <span className="bg-accent-soft text-accent-dark px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
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
            className="prose lg:prose-xl max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured: boolean;
}

class WordPressService {
  private baseUrl: string;

  constructor(wordpressUrl: string) {
    this.baseUrl = `${wordpressUrl}/wp-json/wp/v2`;
  }

  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, '').split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min`;
  }

  private cleanExcerpt(excerpt: string): string {
    return excerpt.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/, '...').trim();
  }

  private transformPost(post: WordPressPost): BlogPost {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const primaryCategory = categories.length > 0 ? categories[0].name : 'Artykuł';

    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: this.cleanExcerpt(post.excerpt.rendered),
      content: post.content.rendered,
      date: post.date,
      readTime: this.calculateReadTime(post.content.rendered),
      category: primaryCategory,
      image: featuredImage,
      featured: false // Will be determined by other logic
    };
  }

  async getPosts(limit?: number): Promise<BlogPost[]> {
    try {
      const params = new URLSearchParams({
        _embed: 'true',
        per_page: limit ? limit.toString() : '10',
        orderby: 'date',
        order: 'desc'
      });

      const response = await fetch(`${this.baseUrl}/posts?${params}`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const posts: WordPressPost[] = await response.json();
      const transformedPosts = posts.map(post => this.transformPost(post));

      // Mark first post as featured
      if (transformedPosts.length > 0) {
        transformedPosts[0].featured = true;
      }

      return transformedPosts;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return [];
    }
  }

  async getPost(id: number): Promise<BlogPost | null> {
    try {
      const response = await fetch(`${this.baseUrl}/posts/${id}?_embed=true`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const post: WordPressPost = await response.json();
      return this.transformPost(post);
    } catch (error) {
      console.error('Error fetching WordPress post:', error);
      return null;
    }
  }

  async getCategories() {
    try {
      const response = await fetch(`${this.baseUrl}/categories`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const categories = await response.json();
      return categories.map((cat: any) => cat.name);
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      return [];
    }
  }
}

// Export a function to create the service with WordPress URL
export const createWordPressService = (wordpressUrl: string) => {
  return new WordPressService(wordpressUrl);
};

// Default fallback posts for development/offline mode
export const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "Jak rozpoznać, że potrzebujesz wsparcia psychologicznego?",
    excerpt: "Poznaj pierwsze sygnały, które mogą wskazywać na potrzebę skorzystania z terapii. Nie czekaj aż będzie za późno.",
    content: "",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Poradnik",
    featured: true
  },
  {
    id: 2,
    title: "CBT w praktyce: jak działa terapia poznawczo-behawioralna",
    excerpt: "Dowiedz się, na czym polega najpopularniejsza forma psychoterapii i jak może pomóc w rozwiązaniu Twoich problemów.",
    content: "",
    date: "2024-01-10",
    readTime: "7 min",
    category: "Nauka",
    featured: false
  },
  {
    id: 3,
    title: "Radzenie sobie ze stresem w codziennym życiu",
    excerpt: "Praktyczne techniki, które możesz zastosować już dzisiaj, aby lepiej radzić sobie z napięciem i presją.",
    content: "",
    date: "2024-01-05",
    readTime: "4 min",
    category: "Praktyka",
    featured: false
  }
];
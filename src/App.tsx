import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Testimonials from "./components/Testimonials";
import PracticalInfo from "./components/PracticalInfo";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Approach />
                {/*<Testimonials />*/}
                <PracticalInfo />
                <Blog />
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/blog" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <BlogPage />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/blog/:id" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <BlogPostPage />
              </main>
              <Footer />
            </div>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

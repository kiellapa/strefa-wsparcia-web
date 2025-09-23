import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RodoClausePage from "./pages/RodoClausePage";
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
import CookieConsent from "react-cookie-consent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          } /><Route path="/polityka-prywatnosci" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <PrivacyPolicyPage />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/klauzula-rodo" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <RodoClausePage />
              </main>
              <Footer />
            </div>
          } />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
        <CookieConsent
      location="bottom"
      buttonText="Akceptuję"
      cookieName="strefaWsparciaCookieConsent"
      style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))", borderTop: "1px solid hsl(var(--border))" }}
      buttonStyle={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", fontSize: "14px", borderRadius: "8px" }}
      expires={150}
    >
      Ta strona korzysta z plików cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny.{" "}
      <a href="/polityka-prywatnosci" target="_blank" className="text-primary underline">
        Dowiedz się więcej
      </a>
    </CookieConsent>
  </QueryClientProvider>
);

export default App;

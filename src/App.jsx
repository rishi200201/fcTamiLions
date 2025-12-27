import { useState, useEffect, lazy, Suspense } from "react";

import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import FloatingWatermark from "./components/FloatingWatermark";
import { Home } from "./components/sections/Home";
import "./index.css";

// Lazy load non-critical sections for better performance
const About = lazy(() => import("./components/sections/About").then(module => ({ default: module.About })));
const FounderTeam = lazy(() => import("./components/sections/FounderTeam").then(module => ({ default: module.FounderTeam })));
const Programs = lazy(() => import("./components/sections/Programs").then(module => ({ default: module.Programs })));
const AIFFLeagues = lazy(() => import("./components/sections/AIFFLeagues").then(module => ({ default: module.AIFFLeagues })));
const Partnerships = lazy(() => import("./components/sections/Partnerships").then(module => ({ default: module.Partnerships })));
const Gallery = lazy(() => import("./components/sections/Gallery").then(module => ({ default: module.Gallery })));
const Contact = lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Loading component for suspense fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
    </div>
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress for enhanced UX
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-800/50 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Floating Watermark */}
      <FloatingWatermark 
        position="bottom-right" 
        variant="dark" 
        opacity={0.06} 
        size="w-20 h-20"
        className="animate-breathe"
      />
      
      {/* Navigation */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Always loaded for performance */}
        <Home />
        
        {/* Lazy loaded sections with suspense boundaries */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FounderTeam />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Programs />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AIFFLeagues />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Partnerships />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 glass p-3 rounded-2xl shadow-luxury hover:shadow-glow-green transition-all duration-300 hover:scale-105 group"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
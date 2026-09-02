import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80; // Account for navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else if (location.pathname === '/') {
        // Scroll to top when on home page without hash
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    scrollToSection();
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="bg-primary relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Projects />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
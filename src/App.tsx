import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Projects,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
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
              <Works />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/projects" element={
            <div className="min-h-screen bg-primary">
              <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat h-[200px]"></div>
              <Projects />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
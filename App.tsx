import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BentoSection } from './components/BentoSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CreatorsPage } from './components/CreatorsPage';
import { AboutPage } from './components/AboutPage';
import { ContactDrawer } from './components/ContactDrawer';

const HomePage: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => (
  <>
    <main className="flex-grow pt-24 md:pt-40">
      {/* Bento Grid Container - Max Width 1440px */}
      <div className="px-6 md:px-12 pb-16 md:pb-32">
        <BentoSection onOpenContact={onOpenContact} />
      </div>

      {/* Full-Width Sections - Outside the Bento Grid */}
      <AboutSection />
      <ContactSection onOpenContact={onOpenContact} />
    </main>
  </>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAFBFC] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <Routes>
        <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <footer className="w-full py-12 px-12 border-t border-slate-100 text-center bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-black tracking-[0.3em] text-[#1D2B36] uppercase text-base">
            The Gente Agency
          </div>
          <p className="text-[#64748B] text-[10px] font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} The Gente Agency. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
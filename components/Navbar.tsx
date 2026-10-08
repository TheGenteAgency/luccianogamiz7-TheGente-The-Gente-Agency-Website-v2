import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Creators', path: '/creators', onClick: undefined },
    { label: 'About', path: '/about', onClick: undefined },
    { label: "Let's Connect", path: '#', onClick: (e: any) => { e.preventDefault(); setMobileMenuOpen(false); onOpenContact(); } },
  ];

  return (
    <>
      <nav className={`w-full fixed top-0 z-[60] transition-all duration-300 px-6 sm:px-8 ${
        scrolled ? 'bg-white border-b border-slate-200 py-3 shadow-sm' : 'bg-white py-6'
      }`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">
          {/* Left Side: Company Name */}
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-[#1D2B36] uppercase flex-shrink-0">
            The Gente Agency
          </Link>

          {/* Center: Logo (Visible on desktop grid or hidden/adjusted on mobile) */}
          <div className="hidden lg:flex justify-center">
            <Link to="/" className="group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="https://i.imgur.com/4Uqk7yx.png" 
                  alt="The Gente Agency Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
          </div>

          {/* Right Side: Desktop Links / Mobile Menu Button */}
          <div className="flex items-center justify-end">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 font-black text-[#1D2B36] uppercase text-[12px] tracking-[0.2em]">
              <Link to="/creators" className="hover:text-[#FF9E80] transition-colors">
                Creators
              </Link>
              <Link to="/about" className="hover:text-[#FF9E80] transition-colors">
                About
              </Link>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenContact(); }}
                className="px-6 py-2 bg-[#A0B3C2]/10 border-2 border-[#1D2B36] hover:bg-[#FF9E80] hover:border-[#FF9E80] hover:text-white transition-all duration-300 text-center uppercase text-[12px] tracking-[0.2em] font-black rounded-full"
              >
                Let's Connect
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 text-[#1D2B36] hover:text-[#FF9E80] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#1D2B36]/90 backdrop-blur-md z-[70]"
            />

            {/* Content Slider */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[80] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <Link to="/" className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/4Uqk7yx.png" 
                    alt="The Gente Agency Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1D2B36] hover:text-[#FF9E80] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={link.onClick}
                    className="text-4xl font-black text-[#1D2B36] uppercase tracking-tighter hover:text-[#FF9E80] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B] mb-6">Follow Us</p>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/thegenteagency/" target="_blank" rel="noopener noreferrer" className="text-[#1D2B36] hover:text-[#E4405F] transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-[#1D2B36] hover:text-[#FF0000] transition-colors">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="text-[#1D2B36] hover:text-black transition-colors">
                    <Music2 size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
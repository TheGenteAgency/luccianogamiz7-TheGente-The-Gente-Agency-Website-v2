import React from 'react';
import { Linkedin } from 'lucide-react';

export const ContactSection: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1D2B36] mb-4 uppercase tracking-tighter">
            Let's Work Together
          </h2>
          
          <p className="text-[#64748B] text-xl md:text-2xl mb-8 font-medium max-w-2xl mx-auto">
            Creator looking for representation? Brand seeking partnerships? Let's talk about your next big move.
          </p>
          
          {onOpenContact ? (
            <button 
              onClick={onOpenContact}
              className="inline-block text-xl md:text-2xl font-black text-[#1D2B36] bg-[#A0B3C2]/20 px-12 py-6 rounded-full hover:bg-[#FF9E80] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-xl shadow-slate-200/50 transform hover:scale-105"
            >
              Contact Us
            </button>
          ) : (
            <a 
              href="mailto:luccianog@thegenteagency.com" 
              className="inline-block text-xl md:text-2xl font-black text-[#1D2B36] bg-[#A0B3C2]/20 px-12 py-6 rounded-full hover:bg-[#FF9E80] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-xl shadow-slate-200/50"
            >
              Contact Us
            </a>
          )}
        </div>

        <div className="flex flex-col items-center gap-8">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-[#64748B]">
            Follow Our Journey
          </h3>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/company/the-gente-agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center text-[#1D2B36] hover:border-[#FF9E80] hover:text-[#FF9E80] transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1D2B36] py-24 md:py-32 px-6">
      <div className="max-w-[800px] mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 uppercase tracking-tight">
          Built on <span className="text-[#FF9E80]">Real</span> Relationships
        </h2>
        
        <div className="space-y-8 text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-12">
          <p>
            The Gente Agency was founded on the belief that the best brand partnerships happen when there's an authentic connection. We're advocates, strategists, and partners in your business's growth.
          </p>
          <p>
            Whether you're a creator building your brand or a company looking for the right voice, we're here to make sh*t happen.
          </p>
        </div>

        <Link 
          to="/about" 
          className="inline-block bg-white text-[#1D2B36] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FF9E80] hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-black/20"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};
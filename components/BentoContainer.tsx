
import React from 'react';
import { ServiceBox } from './ServiceBox';

export const BentoContainer: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      {/* Hero Box */}
      <div className="bg-[#1D2B36] rounded-[24px] p-8 md:p-16 text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col items-start max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            CONNECT THE RIGHT <span className="text-[#FF9E80]">CREATORS</span> WITH YOUR BRAND
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl mb-8 leading-relaxed">
            We help brands build authentic partnerships with creators and help creators turn their influence into sustainable income.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <button className="bg-[#FF9E80] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#e68e73] transition-all transform hover:scale-105">
              Work With Us <span className="text-2xl">→</span>
            </button>
            <a href="#services" className="text-white font-medium text-lg hover:underline flex items-center gap-2">
              View Services <span>↓</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FF9E80] rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="font-medium">Authentic Creator Partnerships</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FF9E80] rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="font-medium">Personalized Strategy & Support</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e293b] to-transparent opacity-30 pointer-events-none"></div>
      </div>

      {/* Services Section Grid */}
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceBox 
          icon="🎯"
          title="Creator Management"
          description="We represent creators looking to grow their influence and monetize their platforms. From negotiating brand deals to developing content strategies, we handle the business so you can focus on creating."
          bullets={[
            "Brand partnership negotiation",
            "Content strategy & growth planning",
            "Contract & legal support",
            "Revenue optimization"
          ]}
        />
        <ServiceBox 
          icon="🤝"
          title="Brand Consulting"
          description="We connect brands with creators who authentically align with their values. Our approach ensures partnerships feel genuine, drive engagement, and deliver measurable results."
          bullets={[
            "Influencer marketing strategy",
            "Creator matchmaking & vetting",
            "Campaign management & execution",
            "Performance tracking & reporting"
          ]}
        />
      </div>
    </div>
  );
};

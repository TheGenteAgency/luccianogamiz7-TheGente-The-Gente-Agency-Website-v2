import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceBox } from './ServiceBox';

export const BentoSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  // Using the direct i.ibb.co links for zero-latency loading
  const initialImages = [
    "https://i.imgur.com/1Fr6Eaa.jpeg",
    "https://i.imgur.com/EhdKR30.png",
    "https://i.imgur.com/DF9448h.png",
    "https://i.imgur.com/Xu0lGFD.png",
    "https://i.ibb.co/F4gt2djm/tiktok-video-MWWn0.jpg",           // Mustache man (Front)
    "https://i.ibb.co/gZKyb8kR/Screenshot-2026-01-16-at-4-47-28-PM.png", // Netflix event (Middle)
    "https://i.ibb.co/MDVLq4sL/Screenshot-2026-01-16-at-4-31-58-PM.png"  // Roadside walk (Back)
  ];

  const [stack, setStack] = useState(initialImages);

  const shuffleStack = () => {
    setStack((prev) => {
      const newStack = [...prev];
      const top = newStack.shift();
      if (top) newStack.push(top);
      return newStack;
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto space-y-6">
      {/* Hero Box: Spans full width of grid */}
      <div className="bg-[#1D2B36] rounded-[24px] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden group">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-8 uppercase tracking-tight">
              CONNECT THE RIGHT <span className="text-[#FF9E80]">CREATORS</span> WITH YOUR BRAND
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 leading-relaxed font-light max-w-2xl">
              Helping brands build authentic partnerships while building sustainable creator-led businesses.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <Link 
                to="/creators" 
                className="bg-[#FF9E80] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#ff8a65] transition-all transform hover:scale-105 shadow-xl shadow-[#FF9E80]/20 inline-block"
              >
                View Talent →
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF9E80] rounded-full flex items-center justify-center text-[#1D2B36] text-[12px] font-black">
                  ✓
                </div>
                <span className="font-bold text-sm md:text-base uppercase tracking-[0.15em] text-slate-200">Authentic Partnerships</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#FF9E80] rounded-full flex items-center justify-center text-[#1D2B36] text-[12px] font-black">
                  ✓
                </div>
                <span className="font-bold text-sm md:text-base uppercase tracking-[0.15em] text-slate-200">Personalized Strategy</span>
              </div>
            </div>
          </div>

          {/* Interactive Shuffle Stack */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-12 lg:py-0">
            <div 
              className="relative w-full max-w-[360px] aspect-[4/5] cursor-pointer group/stack"
              onClick={shuffleStack}
            >
              <p className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#FF9E80] font-bold uppercase tracking-widest text-[10px] whitespace-nowrap opacity-100 transition-opacity duration-300 animate-pulse">
                <span className="md:hidden">Swipe to Shuffle</span>
                <span className="hidden md:inline">Click to Shuffle</span>
              </p>
              
              <div className="relative w-full h-full">
                <AnimatePresence mode="popLayout">
                  {stack.map((img, index) => {
                    const isFront = index === 0;
                    const isMiddle = index === 1;
                    const isBack = index === 2;

                    return (
                      <motion.div 
                        key={img}
                        layout
                        initial={false}
                        animate={{
                          x: isFront ? 0 : isMiddle ? 32 : -32,
                          y: isFront ? 0 : isMiddle ? 16 : 8,
                          rotate: isFront ? 0 : isMiddle ? 6 : -8,
                          scale: isFront ? 1 : isMiddle ? 0.98 : 0.95,
                          opacity: isFront ? 1 : isMiddle ? 0.6 : 0.3,
                          zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                        }}
                        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                        drag={isFront ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                          if (Math.abs(info.offset.x) > 100) {
                            shuffleStack();
                          }
                        }}
                        className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/20 shadow-2xl hover:border-[#FF9E80]/50 touch-none origin-bottom"
                      >
                        <img 
                          src={img} 
                          alt="Creator" 
                          className="w-full h-full object-cover select-none pointer-events-none" 
                          referrerPolicy="no-referrer"
                        />
                        {isFront && <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Service Boxes: Side by side in 2-column grid */}
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
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
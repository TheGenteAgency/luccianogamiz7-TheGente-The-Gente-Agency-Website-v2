import React from 'react';

interface ServiceBoxProps {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, title, description, bullets }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-8 md:p-12 h-full transition-all duration-500 hover:shadow-xl hover:border-[#FF9E80] hover:-translate-y-2 group relative overflow-hidden">
      {/* Icon in the corner - White background style */}
      <div className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:border-[#FF9E80]/30 transition-colors">
        <span>{icon}</span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-black text-[#1D2B36] mb-4 uppercase tracking-tight">
        {title}
      </h3>
      
      <p className="text-[#475569] leading-relaxed mb-10 text-base md:text-xl font-light">
        {description}
      </p>

      <ul className="space-y-5">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[#1F2937] font-bold text-sm md:text-base uppercase tracking-wider">
            <span className="text-[#FF9E80] font-black">→</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};
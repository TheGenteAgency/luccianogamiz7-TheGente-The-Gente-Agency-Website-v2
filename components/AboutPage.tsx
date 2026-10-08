import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC] pt-32 pb-24 px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#FF9E80] font-bold uppercase tracking-widest text-xs mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Brand Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">About The Agency</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1D2B36] uppercase tracking-tight leading-[1.05] mb-8">
            The Gente <span className="text-[#FF9E80]">Agency</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#1D2B36] font-medium leading-relaxed max-w-[820px]">
            A modern talent management and brand consultancy bridging high-level commercial strategy with authentic creator culture.
          </p>
        </div>

        {/* Agency Narrative: Text Only */}
        <div className="space-y-12 text-[#64748B] text-lg md:text-xl leading-relaxed font-normal mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-[#FF9E80]">
              Who We Are
            </h2>
            <p className="text-[#1D2B36] text-xl md:text-2xl font-bold leading-snug">
              We engineer meaningful partnerships between creators and leading global brands.
            </p>
            <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
              Operating at the intersection of athletic culture, movement, and digital storytelling, The Gente Agency functions as a partner, architecting impactful campaigns, negotiating talent deals, and building scalable ventures that turn digital campaigns into long lasting enterprise value.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-[#FF9E80]">
              Origins & Philosophy
            </h2>
            <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
              Founded from an "inside-out" platform perspective. With the founders having spearheaded social and creator initiatives at powerhouse brands including Meta, TikTok, and Gatorade, the team recognized a persistent gap between corporate brand mechanics and authentic creator management. The Gente was launched to bridge that divide.
            </p>
            <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
              We operate with high-touch advocacy, diverse representation, and community empowerment at our core. By aligning deep platform intelligence with the real rhythms of contemporary culture, The Gente ensures every talent on the roster is positioned for long-term equity, creative freedom, and sustainable growth.
            </p>
          </div>

          {/* Key Facts Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#64748B] mb-2">Headquarters</p>
              <p className="text-lg font-black text-[#1D2B36]">Santa Monica, CA</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#64748B] mb-2">Core Focus</p>
              <p className="text-lg font-black text-[#1D2B36]">Sports, Movement & Culture</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#64748B] mb-2">Agency Model</p>
              <p className="text-lg font-black text-[#1D2B36]">360° Representation & Advisory</p>
            </div>
          </div>
        </div>

        {/* Agency Pillars / Core Capabilities */}
        <div className="pt-16 border-t border-slate-200">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF9E80] block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1D2B36] uppercase tracking-tight">
              What Powers The Gente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] flex items-center justify-center text-[#FF9E80] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#1D2B36] text-sm uppercase tracking-wide mb-2">
                Talent Representation
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Full-service career management, high-value deal negotiations, and brand relationship development tailored to individual creator journeys.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] flex items-center justify-center text-[#FF9E80] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#1D2B36] text-sm uppercase tracking-wide mb-2">
                Brand Strategy
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Fortune 500 campaign alignment and culturally resonant narrative strategy that drives measurable organic audience engagement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] flex items-center justify-center text-[#FF9E80] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#1D2B36] text-sm uppercase tracking-wide mb-2">
                Creative Direction
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Elevated visual aesthetics, multi-platform storytelling guidance, and bespoke product launches rooted in authentic creator culture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] flex items-center justify-center text-[#FF9E80] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-black text-[#1D2B36] text-sm uppercase tracking-wide mb-2">
                Equity & Ventures
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Transitioning short-term social influence into long-term commercial assets, proprietary brand building, and sustainable wealth creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

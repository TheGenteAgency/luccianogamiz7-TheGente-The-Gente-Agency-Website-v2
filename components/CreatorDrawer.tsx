import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, TrendingUp, Globe, BarChart3, Instagram, Youtube, Music2 } from 'lucide-react';
import { Creator } from '../types';

interface CreatorDrawerProps {
  creator: Creator | null;
  onClose: () => void;
}

export const CreatorDrawer: React.FC<CreatorDrawerProps> = ({ creator, onClose }) => {
  if (!creator) return null;

  return (
    <AnimatePresence>
      {creator && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-2xl z-[70] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1D2B36] uppercase tracking-tight">{creator.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9E80] font-black uppercase tracking-widest text-[10px]">{creator.handle}</span>
                  <span className="text-slate-300">•</span>
                  <p className="text-[#64748B] font-bold uppercase tracking-widest text-[10px]">{creator.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6 text-[#1D2B36]" />
              </button>
            </div>

            <div className="p-8 space-y-12">
              {/* Hero Image Preview */}
              <div className="aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className={`w-full h-full object-cover ${creator.imagePosition || 'object-top'}`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metrics Grid */}
              {creator.metrics && (
                <div className="space-y-12">
                  {/* Social Reach */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="w-5 h-5 text-[#FF9E80]" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1D2B36]">Social Reach</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {/* Total Reach - Focal Point */}
                      <div className="bg-[#1D2B36] p-6 rounded-2xl text-center shadow-xl border border-[#1D2B36] flex flex-col justify-center relative overflow-hidden group/total">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9E80]/20 to-transparent opacity-0 group-hover/total:opacity-100 transition-opacity duration-500" />
                        <p className="text-3xl font-black text-white relative z-10 mb-1">{creator.metrics.totalReach}</p>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF9E80] relative z-10">Total Connections</p>
                      </div>
                      {creator.metrics.platforms.instagram && (
                        <a 
                          href={creator.socials.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-[#E4405F]/5 transition-colors group/metric"
                        >
                          <Instagram className="w-4 h-4 mx-auto mb-2 text-[#E4405F] group-hover/metric:scale-110 transition-transform" />
                          <p className="text-xl font-black text-[#1D2B36]">{creator.metrics.platforms.instagram}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Followers</p>
                        </a>
                      )}
                      {creator.metrics.platforms.youtube && (
                        <a 
                          href={creator.socials.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-[#FF0000]/5 transition-colors group/metric"
                        >
                          <Youtube className="w-4 h-4 mx-auto mb-2 text-[#FF0000] group-hover/metric:scale-110 transition-transform" />
                          <p className="text-xl font-black text-[#1D2B36]">{creator.metrics.platforms.youtube}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Subscribers</p>
                        </a>
                      )}
                      {creator.metrics.platforms.tiktok && (
                        <a 
                          href={creator.socials.tiktok} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-black/5 transition-colors group/metric"
                        >
                          <Music2 className="w-4 h-4 mx-auto mb-2 text-[#000000] group-hover/metric:scale-110 transition-transform" />
                          <p className="text-xl font-black text-[#1D2B36]">{creator.metrics.platforms.tiktok}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Followers</p>
                        </a>
                      )}
                    </div>
                  </section>

                  {/* Audience Demographics */}
                  <section className="grid sm:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Users className="w-5 h-5 text-[#FF9E80]" />
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1D2B36]">Audience</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Female</span>
                          <span className="text-lg font-black text-[#1D2B36]">{creator.metrics.audience.female}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#FF9E80]" 
                            style={{ width: `${creator.metrics.audience.female}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Male</span>
                          <span className="text-lg font-black text-[#1D2B36]">{creator.metrics.audience.male}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#1D2B36]" 
                            style={{ width: `${creator.metrics.audience.male}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <BarChart3 className="w-5 h-5 text-[#FF9E80]" />
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1D2B36]">Age Split</h3>
                      </div>
                      <div className="space-y-3">
                        {creator.metrics.audience.ageGroups.map((group) => (
                          <div key={group.label} className="flex items-center gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] w-12">{group.label}</span>
                            <div className="flex-grow h-4 bg-slate-50 rounded-md overflow-hidden">
                              <div 
                                className="h-full bg-[#1D2B36]/10" 
                                style={{ width: `${group.value}%` }}
                              />
                            </div>
                            <span className="text-xs font-black text-[#1D2B36] w-8 text-right">{group.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Top Traffic */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <Globe className="w-5 h-5 text-[#FF9E80]" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1D2B36]">Top Traffic</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {creator.metrics.topTraffic.map((item, idx) => (
                        <div key={item.country} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#1D2B36]">
                            <span className="text-[#64748B] mr-2">{idx + 1}.</span>
                            {item.country}
                          </span>
                          <span className="text-sm font-black text-[#FF9E80]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {/* Bio Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1D2B36]">About</h3>
                  <div className="flex gap-3">
                    {creator.socials.instagram && (
                      <a href={creator.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white transition-all">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {creator.socials.tiktok && (
                      <a href={creator.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white transition-all">
                        <Music2 className="w-4 h-4" />
                      </a>
                    )}
                    {creator.socials.youtube && (
                      <a href={creator.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white transition-all">
                        <Youtube className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[#64748B] text-lg leading-relaxed font-medium">
                  {creator.bio}
                </p>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

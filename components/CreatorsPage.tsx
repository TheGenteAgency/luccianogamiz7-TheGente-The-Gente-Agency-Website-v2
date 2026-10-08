import React, { useState } from 'react';
import { Instagram, Youtube, ArrowLeft, Music2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Creator } from '../types';
import { CreatorDrawer } from './CreatorDrawer';

const creators: Creator[] = [
  {
    name: "Brett Wulc",
    handle: "@BRETTWULC",
    role: "Artist & Pottery Creator",
    bio: "This is Brett! He’s an artist and pottery creator with a deep appreciation for craftsmanship, texture, intentional design, and storytelling. Through his work, Brett invites his audience into the meditative process of creating functional art by hand, from shaping clay on the wheel to cooking a delicious meal in the kitchen. Brett has built a highly engaged community around creativity, slow living, and the beauty of making things with care. Based in Portland, OR, Brett creates cinematic, high-quality videos that highlight both the artistry and authenticity of his work. He has recently partnered with brands such as CeraVe and Samsung, seamlessly integrating products into his creative workflow in a way that feels organic and story-driven. Brands can expect elevated visuals, intentional storytelling, and genuine enthusiasm when collaborating.",
    image: "https://i.ibb.co/F4gt2djm/tiktok-video-MWWn0.jpg", // Using existing mustache man image for now
    socials: { 
      instagram: "https://www.instagram.com/brettwulc/", 
      youtube: "https://www.youtube.com/@bwpottery", 
      tiktok: "https://www.tiktok.com/@brettwulc/" 
    },
    metrics: {
      totalReach: "5M",
      platforms: {
        instagram: "808K",
        youtube: "2.2M",
        tiktok: "2M",
        engagementRate: "22%"
      },
      audience: {
        female: 51,
        male: 49,
        ageGroups: [
          { label: "18-24", value: 38 },
          { label: "25-34", value: 37 },
          { label: "35-44", value: 14 },
          { label: "45-54", value: 5 }
        ]
      },
      topTraffic: [
        { country: "USA", value: "25.4%" },
        { country: "Others", value: "50%" },
        { country: "India", value: "7%" },
        { country: "Brazil", value: "7%" },
        { country: "Mexico", value: "5%" }
      ]
    }
  },
  {
    name: "Becci Neumann",
    handle: "@BECCINEUMANN",
    role: "Healthy Food & Lifestyle",
    bio: "Hi, I'm Becci! I have a passion for creating healthy food and living an active and happy lifestyle. I have built a community centered around those passions and love to influence them to do the same. I'm based on the Westside of Los Angeles, California, from where I like to share What I Eat In A Day videos, healthy recipes, weekly food preps, health tips and routines and I always 'keep it real' by letting my audience have a peak inside my daily life. I have also worked with brands such as MUD\\WTR, Sunwink, Thrive Market, Erewhon/Netflix, Lifesum, Primally Pure, Honey Mamas, Herbal Vineyards, Terra Health, Seed, Pique, Buoy Hydration, Osea Malibu, and would love the opportunity to work together. You can expect high quality videos/photos shot in my home or LA locations. I will show you a genuine desire to share your products with my audience! I have built a relationship with my followers based on trust. I only promote products I believe in and my followers know that.",
    image: "https://i.imgur.com/EhdKR30.png",
    imagePosition: "object-center",
    socials: { 
      instagram: "https://www.instagram.com/beccineumann/", 
      tiktok: "https://www.tiktok.com/@beccineumann" 
    },
    metrics: {
      totalReach: "325K",
      platforms: {
        instagram: "205K",
        tiktok: "110K",
        engagementRate: "3.5%"
      },
      audience: {
        female: 95,
        male: 5,
        ageGroups: [
          { label: "18-24", value: 33 },
          { label: "25-34", value: 48 },
          { label: "35-44", value: 13 }
        ]
      },
      topTraffic: [
        { country: "USA", value: "26%" },
        { country: "Canada", value: "4%" },
        { country: "Australia", value: "4%" },
        { country: "Europe", value: "10%" }
      ]
    }
  },
  {
    name: "Sergio Nanu",
    handle: "@BIGSERGGGGGGG",
    role: "Sports & Basketball Creator",
    bio: "Sergio is a sports and basketball creator with a passion for high-energy storytelling, athletic culture, and creative visual production. Through his content, Sergio brings his audience directly onto the court and into the lifestyle, blending top-tier basketball skills with dynamic, engaging, fun narrative flow. He has partnered with leading global brands including Gatorade, DraftKings, DJI, TruHeight, and Lumistar Global—seamlessly integrating products into his active, sports-driven workflow in a way that feels organic and impactful. You can expect dynamic visuals, high-energy storytelling, and genuine audience resonance when collaborating with Sergio.",
    image: "https://i.imgur.com/1Fr6Eaa.jpeg",
    socials: { 
      instagram: "https://www.instagram.com/bigserggggggg/", 
      tiktok: "https://www.tiktok.com/@bigserggg",
      youtube: "https://www.youtube.com/@sergionanu"
    },
    metrics: {
      totalReach: "830K",
      platforms: {
        instagram: "88K",
        youtube: "221K",
        tiktok: "359K"
      },
      audience: {
        female: 15,
        male: 85,
        ageGroups: [
          { label: "18-24", value: 40 },
          { label: "25-34", value: 28.5 },
          { label: "35-44", value: 24.9 },
          { label: "45-54", value: 4 }
        ]
      },
      topTraffic: [
        { country: "USA", value: "44%" },
        { country: "Others", value: "44%" },
        { country: "Canada", value: "2%" },
        { country: "Philippines", value: "2%" },
        { country: "Australia", value: "2%" }
      ]
    }
  },
  {
    name: "Metta Beshay",
    handle: "@METTABESHAY",
    role: "Dynamic YouTube Creator",
    bio: "Metta Beshay is a dynamic YouTube creator known for his engaging explorations into the world and cultural phenomena. With a growing subscriber base of 333K and over 6.5 million views, Metta captivates audiences by delving into topics that challenge perceptions and spark meaningful conversations. Such as one of his more recent videos Debunking The Biggest Drug Myths: A video that garnered over 400K views, in less than a week, showcasing Metta's ability to tackle complex subjects with clarity and insight. Metta's authentic storytelling and investigative style make him an ideal partner for brands in all sectors of lifestyle. His content's depth and relatability offer a unique platform for brands aiming to connect with a discerning audience.",
    image: "https://i.imgur.com/Xu0lGFD.png",
    socials: { 
      youtube: "https://www.youtube.com/@Mettabeshay" 
    },
    metrics: {
      totalReach: "333K+",
      platforms: {
        youtube: "333K",
        engagementRate: "329K Avg Views"
      },
      audience: {
        female: 12.4,
        male: 86.3,
        ageGroups: [
          { label: "18-24", value: 21 },
          { label: "25-34", value: 31 },
          { label: "35-44", value: 22 },
          { label: "45-54", value: 15 },
          { label: "55-64", value: 7.5 }
        ]
      },
      topTraffic: [
        { country: "USA", value: "68.4%" },
        { country: "Canada", value: "5.4%" },
        { country: "UK", value: "5.4%" }
      ]
    }
  },
  {
    name: "Erin Erickson",
    handle: "@ERINERICKSON",
    role: "Cinematic Content Creator, Video Editor & Filmmaker",
    bio: "Erin Erickson is a premier cinematic content creator, video editor, and filmmaker specializing in high-impact editing tutorials and visual storytelling. With a background producing high-performing YouTube and podcast content for major digital public figures, she also refined her craft as a core video editor and creator at Artlist. Erin’s skill and creative authority have made her a trusted partner for high-quality collaborations, including a previous partnership with the Captions app. She knows exactly how to pair high-end editing with highly engaging content, delivering top-tier content whether she’s behind the camera or on-screen.",
    image: "https://i.imgur.com/DF9448h.png",
    socials: { 
      instagram: "https://www.instagram.com/erinerickson/" 
    },
    metrics: {
      totalReach: "9K",
      platforms: {
        instagram: "9K"
      },
      audience: {
        female: 29.5,
        male: 70.5,
        ageGroups: [
          { label: "18-24", value: 17 },
          { label: "25-34", value: 60 },
          { label: "35-44", value: 19 }
        ]
      },
      topTraffic: [
        { country: "USA", value: "45%" },
        { country: "India", value: "6%" },
        { country: "UK", value: "3.5%" },
        { country: "Canada", value: "3%" }
      ]
    }
  },
  {
    name: "Spencer Braddock",
    handle: "@THESTRETCHWARRIOR",
    role: "The Stretch Warrior",
    bio: "Spencer Braddock is a dynamic content creator based in Los Angeles, CA, with a passion for movement, fitness, and holistic living. Known for his fun, approachable personality, Spencer motivates his audience to unlock their full potential through stretching, mobility, and self-improvement. His lifestyle content seamlessly blends practical fitness/stretching tips, motivational insights, and entertainment, making healthy habits feel achievable—and fun. Spencer doesn’t just talk the talk; he’s built Tower Fridays, a growing community that gathers every Friday morning at Santa Monica Beach for energizing stretches, mobility circuits, and invigorating ocean plunges. Whether online or in person, Spencer’s mission is clear: inspire others to move, stretch, and live with intention—one day at a time.",
    image: "https://i.imgur.com/wedVBZo.jpeg",
    socials: { 
      instagram: "https://www.instagram.com/thestretchwarrior/", 
      tiktok: "https://www.tiktok.com/@thestretchwarrior/",
      youtube: "https://www.youtube.com/@thestretchwarrior"
    },
    metrics: {
      totalReach: "104K",
      platforms: {
        instagram: "101K",
        tiktok: "3K",
        youtube: "660"
      },
      audience: {
        female: 72,
        male: 28,
        ageGroups: [
          { label: "18-24", value: 1.5 },
          { label: "25-34", value: 7 },
          { label: "35-55", value: 15 },
          { label: "45-54", value: 26.4 },
          { label: "55-64", value: 31 },
          { label: "65+", value: 18.5 }
        ]
      },
      topTraffic: [
        { country: "New York", value: "2%" },
        { country: "London", value: "1.5%" },
        { country: "Sydney", value: "1.1%" },
        { country: "Los Angeles", value: "0.8%" }
      ]
    }
  }
];

export const CreatorsPage: React.FC = () => {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFBFC] pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#FF9E80] font-bold uppercase tracking-widest text-xs mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">Our Talent</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1D2B36] mb-8 uppercase tracking-tighter">
            Behind the Screens
          </h1>
          <p className="text-[#64748B] text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Our creators are the heart of our agency. Get acquainted with their talents and passions.
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {creators.map((creator, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-8 items-center md:items-start group cursor-pointer"
              onClick={() => setSelectedCreator(creator)}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 aspect-square rounded-[32px] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] bg-slate-50">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className={`w-full h-full object-cover ${creator.imagePosition || 'object-top'}`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Container */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-black text-[#1D2B36] mb-0.5 uppercase tracking-tight">
                  {creator.name}
                </h2>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#FF9E80] font-black uppercase tracking-[0.2em] text-sm">
                    {creator.handle}
                  </span>
                </div>
                <p className="text-[#64748B] font-bold uppercase tracking-[0.1em] text-[10px] mb-3">
                  {creator.role}
                </p>
                
                <div className="w-12 h-[2px] bg-slate-200 mb-5"></div>
                
                {/* Social Links with Follower Counts */}
                <div className="flex gap-6">
                  {creator.socials.instagram && (
                    <div className="flex flex-col items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <a 
                        href={creator.socials.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white hover:border-[#1D2B36] transition-all duration-300 shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-4.5 h-4.5" />
                      </a>
                      <span className="text-xs font-black text-[#1D2B36] transition-colors group-hover:text-[#FF9E80]">
                        {creator.metrics?.platforms.instagram}
                      </span>
                    </div>
                  )}
                  {creator.socials.tiktok && (
                    <div className="flex flex-col items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <a 
                        href={creator.socials.tiktok} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white hover:border-[#1D2B36] transition-all duration-300 shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Music2 className="w-4.5 h-4.5" />
                      </a>
                      <span className="text-xs font-black text-[#1D2B36] transition-colors group-hover:text-[#FF9E80]">
                        {creator.metrics?.platforms.tiktok}
                      </span>
                    </div>
                  )}
                  {creator.socials.youtube && (
                    <div className="flex flex-col items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <a 
                        href={creator.socials.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white hover:border-[#1D2B36] transition-all duration-300 shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Youtube className="w-4.5 h-4.5" />
                      </a>
                      <span className="text-xs font-black text-[#1D2B36] transition-colors group-hover:text-[#FF9E80]">
                        {creator.metrics?.platforms.youtube}
                      </span>
                    </div>
                  )}
                </div>

                {/* Smaller View Profile CTA */}
                <div className="mt-8 flex items-center gap-2 group/cta">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748B] group-hover:text-[#1D2B36] transition-colors">
                    Find out more
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#FF9E80] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Drawer */}
      <CreatorDrawer 
        creator={selectedCreator} 
        onClose={() => setSelectedCreator(null)} 
      />
    </div>
  );
};


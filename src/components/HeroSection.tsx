import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative pt-36 pb-28 md:pt-48 md:pb-36 overflow-hidden bg-[#FAF8F3]">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.08] text-balance max-w-3xl mx-auto">
          Your images. <br />
          <span className="text-[#1A1A1A]">Every format.</span> <br />
          <span className="relative inline-block text-[#FF7A1A]">
            One place.
            <svg
              className="absolute left-0 -bottom-1.5 w-full h-2 text-[#FF7A1A]/30"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-[#1A1A1A]/80 font-normal leading-relaxed max-w-2xl mx-auto">
          Split, compress, resize, and crop your images with PIXORA. Four essential image tools, brought together in one simple workspace.
        </p>

        {/* Primary CTA cluster */}
        <div className="flex items-center justify-center pt-2">
          <a
            href="https://pixora-three-ecru.vercel.app/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-all shadow-[0_4px_14px_rgba(255,122,26,0.35)] hover:shadow-[0_6px_20px_rgba(255,122,26,0.45)] cursor-pointer text-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Micro value points */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#1A1A1A]/70">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
            100% Client-Side Privacy
          </span>
          <span className="text-[#1A1A1A]/30">·</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
            Lossless & Precision Control
          </span>
          <span className="text-[#1A1A1A]/30">·</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#FF7A1A]" />
            Zero File Upload Lag
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

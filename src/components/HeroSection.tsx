import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Minimize2, Maximize2, Crop, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const tools = [
    {
      id: 'splitter',
      label: 'Image Splitter',
      icon: Grid,
      desc: 'Divide images into multi-tile grids & carousels',
      route: '/tools/splitter',
    },
    {
      id: 'compressor',
      label: 'Image Compressor',
      icon: Minimize2,
      desc: 'Reduce file sizes while preserving clarity',
      route: '/tools/compressor',
    },
    {
      id: 'resizer',
      label: 'Image Resizer',
      icon: Maximize2,
      desc: 'Scale pixel dimensions with aspect ratio lock',
      route: '/tools/resizer',
    },
    {
      id: 'cropper',
      label: 'Image Cropper',
      icon: Crop,
      desc: 'Frame compositions with aspect ratio guides',
      route: '/tools/cropper',
    },
  ];

  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#FAF8F3]">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Subtle editorial kicker */}
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1A1A1A]/70">
          <span className="w-1.5 h-1.5 rounded-none bg-[#FF7A1A]" />
          <span>Unified Image Utility Suite</span>
          <span className="text-[#1A1A1A]/30">/</span>
          <span>Local Browser Execution</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.08] text-balance max-w-3xl mx-auto">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/app"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-all shadow-[0_4px_14px_rgba(255,122,26,0.35)] hover:shadow-[0_6px_20px_rgba(255,122,26,0.45)] cursor-pointer text-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#1A1A1A] bg-transparent hover:bg-black/5 border border-[#1A1A1A]/20 rounded-md transition-colors cursor-pointer text-center"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#1A1A1A]/60" />
            Explore Tools
          </Link>
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

        {/* Quick Tool Navigation Grid */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.id}
                to={t.route}
                className="bg-white border border-[#1A1A1A]/10 hover:border-[#FF7A1A]/50 rounded-xl p-5 transition-all shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] text-[#FF7A1A] border border-[#1A1A1A]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF7A1A] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#FF7A1A] transition-colors">
                    {t.label}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/65 mt-1 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1A1A1A]/5 flex items-center justify-between text-[11px] font-semibold text-[#FF7A1A]">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

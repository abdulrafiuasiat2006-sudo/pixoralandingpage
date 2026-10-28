import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, Minimize2, Maximize2, Crop } from 'lucide-react';
import { PixoraIcon } from './PixoraLogo';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-[#FAF8F3] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7A1A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center justify-center mb-2">
          <PixoraIcon size={44} />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight text-balance">
          Ready to work smarter with your images?
        </h2>

        <p className="text-lg sm:text-xl text-[#FAF8F3]/75 max-w-2xl mx-auto font-normal leading-relaxed">
          Explore the PIXORA image tools and find the right tool for your next project.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/app"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-all shadow-[0_4px_20px_rgba(255,122,26,0.4)] cursor-pointer text-center"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick-access tool buttons */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
          <span className="text-white/40 font-mono">Quick Access:</span>
          <Link
            to="/tools/splitter"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 cursor-pointer text-white"
          >
            <Grid className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Image Splitter</span>
          </Link>
          <Link
            to="/tools/compressor"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 cursor-pointer text-white"
          >
            <Minimize2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Image Compressor</span>
          </Link>
          <Link
            to="/tools/resizer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 cursor-pointer text-white"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Image Resizer</span>
          </Link>
          <Link
            to="/tools/cropper"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors border border-white/10 cursor-pointer text-white"
          >
            <Crop className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Image Cropper</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

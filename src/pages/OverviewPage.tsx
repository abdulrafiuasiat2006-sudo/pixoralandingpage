import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Layers, Cpu, ArrowRight, Grid, Minimize2, Maximize2, Crop, CheckCircle } from 'lucide-react';
import workspaceImg from '../assets/images/workspace_photo_sample_1793173685569.jpg';

export const OverviewPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <span>Product Architecture & Principles</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Everything you need to work with images.
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">
            PIXORA is engineered to give creators, developers, and everyday users direct, high-speed control over their image transformations without unnecessary server roundtrips or software bloat.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-lg aspect-21/9 bg-[#1A1A1A]">
          <img
            src={workspaceImg}
            alt="PIXORA Creative Workspace"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-xl text-white space-y-2">
              <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">
                Precision Browser Engine
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Four essential image tools. One streamlined studio.
              </h2>
            </div>
          </div>
        </div>

        {/* Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A]">Zero Cloud Uploads</h3>
            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
              Every image loaded into PIXORA is processed exclusively within your browser’s local sandbox using native HTML5 Canvas and WebAssembly graphics pipelines. Your private assets never touch a remote server.
            </p>
          </div>

          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A]">Instantaneous Results</h3>
            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
              By removing server upload bottlenecks and queue limits, adjustments execute with near-zero latency. Slide a compression slider or select a 3×3 grid cut, and view the updated output immediately.
            </p>
          </div>

          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A]">Hardware Accelerated</h3>
            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
              Rendering computations utilize GPU rasterization where supported by the browser, allowing heavy megapixel camera photos to be sliced, scaled, and compressed without UI stutter.
            </p>
          </div>
        </div>

        {/* The 4-Tool Family Overview */}
        <div className="space-y-6 pt-8 border-t border-[#1A1A1A]/10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
              The PIXORA Tool Suite
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 mt-1">
              Explore how each tool fits into your creative or production workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#FF7A1A] text-white">
                    <Grid className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Image Splitter</h3>
                    <span className="text-xs text-[#1A1A1A]/60">Grid & Tile Division</span>
                  </div>
                </div>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Divide high-resolution panoramas and compositions into multi-tile Instagram profiles (3×3), panoramic swipeable carousels (3×1), or custom poster grids with ZIP archive export.
                </p>
              </div>
              <Link
                to="/tools/splitter"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A1A] hover:text-[#e66c14]"
              >
                Launch Image Splitter <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#FF7A1A] text-white">
                    <Minimize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Image Compressor</h3>
                    <span className="text-xs text-[#1A1A1A]/60">Byte & Payload Reducer</span>
                  </div>
                </div>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Reduce heavy multi-megabyte image assets down to crisp, lightweight files optimized for email, mobile web, and fast web hosting without visible visual distortion.
                </p>
              </div>
              <Link
                to="/tools/compressor"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A1A] hover:text-[#e66c14]"
              >
                Launch Image Compressor <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#FF7A1A] text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Image Resizer</h3>
                    <span className="text-xs text-[#1A1A1A]/60">Dimension Scaling Engine</span>
                  </div>
                </div>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Scale image width and height to exact pixel specifications with locked or free aspect ratios, or click one of the verified social platform presets (Instagram, TikTok, YouTube, Web HD).
                </p>
              </div>
              <Link
                to="/tools/resizer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A1A] hover:text-[#e66c14]"
              >
                Launch Image Resizer <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#FF7A1A] text-white">
                    <Crop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">Image Cropper</h3>
                    <span className="text-xs text-[#1A1A1A]/60">Composition Framing</span>
                  </div>
                </div>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                  Focus on the primary subject of your photography using rule-of-thirds composition guides, preset aspect ratios (1:1, 4:5, 16:9, 9:16), zoom magnification, and 90-degree rotations.
                </p>
              </div>
              <Link
                to="/tools/cropper"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7A1A] hover:text-[#e66c14]"
              >
                Launch Image Cropper <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Ready to try PIXORA?</h3>
            <p className="text-sm text-white/70 max-w-md">
              Open the unified studio workspace and start transforming your images right now.
            </p>
          </div>
          <Link
            to="/app"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            Launch Studio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;

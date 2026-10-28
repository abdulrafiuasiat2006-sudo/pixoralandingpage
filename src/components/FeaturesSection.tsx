import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Minimize2, Maximize2, Crop, ArrowRight, Check } from 'lucide-react';
import portraitImg from '../assets/images/compressor_sample_portrait_1793173685857.jpg';
import landscapeImg from '../assets/images/hero_sample_landscape_1793173684746.jpg';
import stillLifeImg from '../assets/images/social_creative_composition_1793173686484.jpg';

export const FeaturesSection: React.FC = () => {
  const [compressQuality, setCompressQuality] = useState<number>(75);
  const [splitGrid, setSplitGrid] = useState<{ rows: number; cols: number }>({ rows: 3, cols: 3 });
  const [resizePreset, setResizePreset] = useState<'square' | 'story' | 'banner'>('square');
  const [cropAspect, setCropAspect] = useState<'1:1' | '16:9' | '4:5'>('1:1');

  const estimatedKb = Math.round(3800 * (compressQuality / 100) * 0.18);
  const percentSaved = Math.round((1 - (estimatedKb / 3800)) * 100);

  return (
    <section id="features" className="py-24 md:py-32 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A] mb-3">
            Core Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Four focused tools. <br className="hidden sm:inline" />
            Built for precision and speed.
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/75 leading-relaxed">
            Every tool in PIXORA is designed with an intuitive interface, direct controls, and instant output. No bloat, no subscription walls, and no unnecessary friction.
          </p>
        </div>

        {/* Feature 1: Image Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-xl border border-[#1A1A1A]/10 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A1A]">
              <span className="w-6 h-[1px] bg-[#FF7A1A]" />
              <span>TOOL 01 // GRID ENGINE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Grid className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                Image Splitter
              </h3>
            </div>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              Divide a single image into multiple tiles or grid sections for creative layouts and social media posts.
            </p>
            <div className="space-y-2 text-sm text-[#1A1A1A]/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>Create 3×3 Instagram multi-tile profile mosaics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>Seamless panoramic carousels (3×1 or 2×1)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>One-click bulk ZIP or individual tile export</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/tools/splitter"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Launch Image Splitter
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="inline-flex items-center gap-1 bg-[#FAF8F3] border border-[#1A1A1A]/10 p-1 rounded-md text-xs">
                <button
                  onClick={() => setSplitGrid({ rows: 3, cols: 3 })}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    splitGrid.rows === 3 && splitGrid.cols === 3
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                  }`}
                >
                  3×3 Grid
                </button>
                <button
                  onClick={() => setSplitGrid({ rows: 1, cols: 3 })}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    splitGrid.rows === 1 && splitGrid.cols === 3
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                  }`}
                >
                  3×1 Carousel
                </button>
                <button
                  onClick={() => setSplitGrid({ rows: 2, cols: 2 })}
                  className={`px-2 py-1 rounded cursor-pointer ${
                    splitGrid.rows === 2 && splitGrid.cols === 2
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                  }`}
                >
                  2×2 Tiles
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden bg-[#1A1A1A] p-3 border border-[#1A1A1A]/20">
              <div className="relative aspect-video rounded overflow-hidden">
                <img
                  src={landscapeImg}
                  alt="PIXORA Splitter demonstration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 p-2 gap-1.5"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${splitGrid.cols}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${splitGrid.rows}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: splitGrid.rows * splitGrid.cols }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-[#FF7A1A]/80 bg-[#FF7A1A]/10 rounded flex items-center justify-center transition-all hover:bg-[#FF7A1A]/25 cursor-pointer"
                    >
                      <span className="text-[11px] font-mono font-bold bg-[#1A1A1A]/90 text-white px-2 py-0.5 rounded shadow">
                        Tile {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-[#FAF8F3]/60 px-1 font-mono">
                <span>Output: {splitGrid.rows * splitGrid.cols} indexed square tiles</span>
                <span className="text-[#FF7A1A]">Ready for export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Image Compressor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-xl border border-[#1A1A1A]/10 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-[#1A1A1A] text-[#FAF8F3] rounded-lg p-5 border border-black/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="text-xs font-mono text-white/70">
                  Target Size Simulator
                </div>
                <div className="text-xs font-mono text-[#FF7A1A] font-bold">
                  -{percentSaved}% Smaller
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-xs text-white/50 font-mono">ORIGINAL FILE</div>
                  <div className="relative aspect-4/3 rounded overflow-hidden border border-white/10">
                    <img
                      src={portraitImg}
                      alt="Original image uncompressed"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#1A1A1A]/90 px-2 py-0.5 rounded text-[11px] font-mono text-white">
                      3.8 MB (100%)
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-[#FF7A1A] font-mono">PIXORA COMPRESSED</div>
                  <div className="relative aspect-4/3 rounded overflow-hidden border border-[#FF7A1A]">
                    <img
                      src={portraitImg}
                      alt="Compressed with PIXORA"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#FF7A1A] px-2 py-0.5 rounded text-[11px] font-mono text-white font-bold">
                      {estimatedKb} KB ({compressQuality}%)
                    </div>
                  </div>
                </div>
              </div>

              {/* Compression Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Quality Factor:</span>
                  <span className="font-mono text-[#FF7A1A] font-bold">{compressQuality}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={compressQuality}
                  onChange={(e) => setCompressQuality(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF7A1A]"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>Max Compression (20%)</span>
                  <span>Balanced (75%)</span>
                  <span>Near Lossless (95%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A1A]">
              <span className="w-6 h-[1px] bg-[#FF7A1A]" />
              <span>TOOL 02 // COMPRESSION ENGINE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Minimize2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                Image Compressor
              </h3>
            </div>
            <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
              Reduce image file sizes to make images easier to upload, share, and use.
            </p>
            <div className="space-y-2 text-sm text-[#1A1A1A]/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>Drastically cut megabytes down to light kilobytes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>Convert to modern WebP or standard JPEG/PNG</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7A1A]" />
                <span>Instant visual before-and-after comparison</span>
              </div>
            </div>
            <Link
              to="/tools/compressor"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors cursor-pointer shadow-sm"
            >
              Launch Image Compressor
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Feature 3 & Feature 4: Side by Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 3: Image Resizer */}
          <div className="bg-white rounded-xl border border-[#1A1A1A]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A1A]">
                <span className="w-6 h-[1px] bg-[#FF7A1A]" />
                <span>TOOL 03 // SCALING ENGINE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">
                  Image Resizer
                </h3>
              </div>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                Adjust image dimensions to fit the requirements of your project or platform.
              </p>

              <div className="bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#1A1A1A]/70">Platform Dimension Presets:</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setResizePreset('square')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors cursor-pointer ${
                      resizePreset === 'square'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                    }`}
                  >
                    1080×1080<br />
                    <span className="text-[10px] opacity-75">Square / Post</span>
                  </button>
                  <button
                    onClick={() => setResizePreset('story')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors cursor-pointer ${
                      resizePreset === 'story'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                    }`}
                  >
                    1080×1920<br />
                    <span className="text-[10px] opacity-75">Story / 9:16</span>
                  </button>
                  <button
                    onClick={() => setResizePreset('banner')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors cursor-pointer ${
                      resizePreset === 'banner'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                    }`}
                  >
                    1920×1080<br />
                    <span className="text-[10px] opacity-75">Web / Banner</span>
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 pt-1 border-t border-[#1A1A1A]/10">
                  <span>Aspect Ratio Lock: Enabled</span>
                  <span className="font-mono text-[#FF7A1A]">Exact pixel precision</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/tools/resizer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors cursor-pointer shadow-sm text-center"
              >
                Launch Image Resizer
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Feature 4: Image Cropper */}
          <div className="bg-white rounded-xl border border-[#1A1A1A]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF7A1A]">
                <span className="w-6 h-[1px] bg-[#FF7A1A]" />
                <span>TOOL 04 // FRAMING ENGINE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                  <Crop className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">
                  Image Cropper
                </h3>
              </div>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                Crop images to focus on the content you want and create the composition you need.
              </p>

              <div className="bg-[#1A1A1A] rounded-lg p-3 text-white">
                <div className="relative aspect-video rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={stillLifeImg}
                    alt="Cropper demo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`border-2 border-[#FF7A1A] bg-black/20 absolute transition-all duration-300 flex items-center justify-center ${
                      cropAspect === '1:1'
                        ? 'w-36 h-36'
                        : cropAspect === '16:9'
                        ? 'w-52 h-28'
                        : 'w-32 h-40'
                    }`}
                  >
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div />
                    </div>
                    <span className="text-[10px] font-mono bg-[#1A1A1A]/90 px-1.5 py-0.5 rounded text-white">
                      {cropAspect}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs">
                  <span className="text-white/60">Aspect Selection:</span>
                  <div className="flex gap-2">
                    {(['1:1', '4:5', '16:9'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setCropAspect(ratio)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono cursor-pointer ${
                          cropAspect === ratio
                            ? 'bg-[#FF7A1A] text-white font-bold'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/tools/cropper"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors cursor-pointer shadow-sm text-center"
              >
                Launch Image Cropper
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

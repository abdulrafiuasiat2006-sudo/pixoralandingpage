import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Minimize2, Maximize2, Crop, ArrowRight, Check, Sparkles, SlidersHorizontal, Download } from 'lucide-react';
import portraitImg from '../assets/images/compressor_sample_portrait_1793173685857.jpg';
import landscapeImg from '../assets/images/hero_sample_landscape_1793173684746.jpg';
import stillLifeImg from '../assets/images/social_creative_composition_1793173686484.jpg';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <span>Complete Feature Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Four specialized tools. Zero compromises.
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">
            Detailed breakdown of capabilities, supported configurations, and direct access to each tool inside the PIXORA workspace.
          </p>
        </div>

        {/* Feature 1: Image Splitter Detailed */}
        <div id="splitter" className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Grid className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">Tool 01</span>
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Image Splitter</h2>
              </div>
            </div>
            <Link
              to="/tools/splitter"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
            >
              Open Splitter in App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed">
              <p>
                The PIXORA Image Splitter divides any image into precise tile segments, ideal for social media mosaics, Instagram grid layouts, multi-slide panorama carousels, and print posters.
              </p>
              <h3 className="font-bold text-[#1A1A1A] text-base pt-2">Key Specifications:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Grid Customization:</strong> Configure any column (1–6) and row (1–6) division combination.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>One-Click Presets:</strong> Instant buttons for 3×3 Instagram profiles, 3×1 panoramic carousels, and 2×2 quadrants.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Smart Bulk Export:</strong> Download individual sliced tiles or generate a bundled ZIP archive containing all numbered tiles.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A] p-2 border border-black/10">
                <div className="relative aspect-video rounded overflow-hidden">
                  <img
                    src={landscapeImg}
                    alt="Splitter preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-2 gap-1.5 pointer-events-none">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-[#FF7A1A]/80 bg-[#FF7A1A]/10 rounded flex items-center justify-center"
                      >
                        <span className="text-[10px] font-mono font-bold bg-[#1A1A1A]/90 text-white px-2 py-0.5 rounded">
                          T_{i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Image Compressor Detailed */}
        <div id="compressor" className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Minimize2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">Tool 02</span>
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Image Compressor</h2>
              </div>
            </div>
            <Link
              to="/tools/compressor"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
            >
              Open Compressor in App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed">
              <p>
                The PIXORA Image Compressor applies advanced compression quantization to reduce file payloads by up to 90% without sacrificing perceptible visual sharpness or contrast.
              </p>
              <h3 className="font-bold text-[#1A1A1A] text-base pt-2">Key Specifications:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Granular Quality Slider:</strong> Continuous adjustment from 10% (ultra-compact) to 98% (near-lossless).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Modern Format Conversion:</strong> Export to Google WebP, standard JPEG, or PNG formats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Live Metric Counter:</strong> See exact original size vs compressed size and net percentage savings in real time.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#1A1A1A] text-[#FAF8F3] rounded-xl p-5 border border-black/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60">Compression Simulator</span>
                  <span className="text-green-400 font-bold">-88% Byte Reduction</span>
                </div>
                <div className="aspect-4/3 rounded overflow-hidden relative">
                  <img
                    src={portraitImg}
                    alt="Compressor sample"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/90 px-3 py-1 rounded text-xs font-mono text-white">
                    Quality: 80% · 3.8 MB → 456 KB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Image Resizer Detailed */}
        <div id="resizer" className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Maximize2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">Tool 03</span>
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Image Resizer</h2>
              </div>
            </div>
            <Link
              to="/tools/resizer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
            >
              Open Resizer in App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed">
              <p>
                The PIXORA Image Resizer accurately scales image width and height down or up using high-quality bicubic interpolation algorithms, ensuring crisp edges for web and print.
              </p>
              <h3 className="font-bold text-[#1A1A1A] text-base pt-2">Key Specifications:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Pixel Precision:</strong> Input exact width and height numbers with instant recalculation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Aspect Ratio Lock:</strong> Toggle locking to prevent accidental image distortion or stretching.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Social Platform Presets:</strong> Pre-programmed dimensions for Instagram (1080×1080), Stories/TikTok (1080×1920), YouTube (1280×720), and Full HD (1920×1080).</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">
                Preset Dimensions Library
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/10">
                  <div className="font-bold text-[#1A1A1A]">1080 × 1080 px</div>
                  <div className="text-xs text-[#1A1A1A]/60">1:1 Square (Instagram Feed)</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/10">
                  <div className="font-bold text-[#1A1A1A]">1080 × 1920 px</div>
                  <div className="text-xs text-[#1A1A1A]/60">9:16 Vertical (Reels / TikTok)</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/10">
                  <div className="font-bold text-[#1A1A1A]">1280 × 720 px</div>
                  <div className="text-xs text-[#1A1A1A]/60">16:9 Landscape (YouTube Thumbnail)</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/10">
                  <div className="font-bold text-[#1A1A1A]">1920 × 1080 px</div>
                  <div className="text-xs text-[#1A1A1A]/60">Full HD (Web Banners & Displays)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Image Cropper Detailed */}
        <div id="cropper" className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center shrink-0">
                <Crop className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">Tool 04</span>
                <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Image Cropper</h2>
              </div>
            </div>
            <Link
              to="/tools/cropper"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
            >
              Open Cropper in App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed">
              <p>
                The PIXORA Image Cropper gives you precision compositional framing with classic visual guides, arbitrary or locked aspect ratios, and instant export.
              </p>
              <h3 className="font-bold text-[#1A1A1A] text-base pt-2">Key Specifications:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Aspect Ratios:</strong> Seamless switching between 1:1 square, 4:5 portrait, 16:9 widescreen, and 9:16 mobile story.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Rule-of-Thirds Grid:</strong> Toggleable golden composition grid lines for placing subjects at key focal points.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                  <span><strong>Zoom & 90° Rotation:</strong> Re-orient sideways camera shots and zoom in on details before cropping.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A] p-2 border border-black/10">
                <div className="relative aspect-video rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={stillLifeImg}
                    alt="Cropper sample"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-4 border-2 border-[#FF7A1A] bg-black/20 flex items-center justify-center">
                    <span className="text-[10px] font-mono bg-[#1A1A1A] text-white px-2 py-0.5 rounded">
                      Crop: 16:9 Cinematic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">All 4 tools. One single workspace.</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Launch the PIXORA workspace to access Splitter, Compressor, Resizer, and Cropper in one unified interface.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors"
          >
            Launch All Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

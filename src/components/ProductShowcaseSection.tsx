import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Minimize2, Maximize2, Crop, ArrowRight, CheckCircle2 } from 'lucide-react';
import landscapeImg from '../assets/images/hero_sample_landscape_1793173684746.jpg';

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'splitter' | 'compressor' | 'resizer' | 'cropper'>('splitter');

  const tools = [
    {
      id: 'splitter' as const,
      name: 'Splitter',
      icon: Grid,
      route: '/tools/splitter',
      summary: 'Tile division for Instagram grids, carousels, and poster mosaics',
      controls: ['Grid columns (1-6)', 'Grid rows (1-6)', 'Tile aspect sync', 'ZIP batch download'],
    },
    {
      id: 'compressor' as const,
      name: 'Compressor',
      icon: Minimize2,
      route: '/tools/compressor',
      summary: 'Aggressive file size reduction while preserving perceptual clarity',
      controls: ['Quality threshold (1-100%)', 'Format: WebP / JPEG / PNG', 'Live byte calculation', 'Side-by-side loupe'],
    },
    {
      id: 'resizer' as const,
      name: 'Resizer',
      icon: Maximize2,
      route: '/tools/resizer',
      summary: 'Pixel-perfect dimension scaling with lockable aspect ratios',
      controls: ['Exact pixel inputs (W × H)', 'Percentage scaling (25% - 200%)', 'Social media presets', 'Interpolation control'],
    },
    {
      id: 'cropper' as const,
      name: 'Cropper',
      icon: Crop,
      route: '/tools/cropper',
      summary: 'Precision framing, composition grids, and freeform or fixed aspect crops',
      controls: ['Aspect ratios (1:1, 4:5, 16:9, 9:16)', 'Rule-of-thirds grid guides', 'Zoom and rotation', 'Instant export'],
    },
  ];

  const currentTool = tools.find((t) => t.id === activeTab) || tools[0];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            Unified Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            One workspace. Four essential tools.
          </h2>
          <p className="text-lg text-[#1A1A1A]/75 leading-relaxed">
            Switch effortlessly between image tools without re-uploading your files or managing fragmented browser tabs.
          </p>
        </div>

        {/* Studio Window Mockup */}
        <div className="bg-[#1A1A1A] rounded-2xl p-4 sm:p-6 shadow-2xl border border-black/20 text-[#FAF8F3]">
          {/* Top Titlebar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-white/60 ml-2">PIXORA STUDIO // ACTIVE SESSION</span>
            </div>

            {/* Tool Switcher Tabs */}
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
              {tools.map((t) => {
                const Icon = t.icon;
                const isSelected = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF7A1A] text-white shadow-sm font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t.name}</span>
                  </button>
                );
              })}
            </div>

            <Link
              to="/app"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors text-center"
            >
              Open in App
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Workspace Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Left Inspector / Settings Panel */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A1A]">
                  Active Tool Inspector
                </span>
                <h4 className="text-xl font-bold text-white mt-1">{currentTool.name}</h4>
                <p className="text-xs text-white/70 mt-1">{currentTool.summary}</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  Configured Parameters:
                </span>
                {currentTool.controls.map((ctrl) => (
                  <div key={ctrl} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0" />
                    <span>{ctrl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-white/40">File Metadata</div>
                <div className="bg-black/40 rounded p-2 text-xs font-mono text-white/70 space-y-1">
                  <div className="flex justify-between">
                    <span>Source:</span>
                    <span className="text-white">sample_alpine.jpg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <span className="text-[#FF7A1A]">1920 × 1080 px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="text-white/60">HTML5 Canvas 2D</span>
                  </div>
                </div>
              </div>

              <Link
                to={currentTool.route}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors flex items-center justify-center gap-2 text-center"
              >
                Launch {currentTool.name} Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Canvas Mockup */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-black/60 border border-white/10 rounded-xl p-4">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center">
                <img
                  src={landscapeImg}
                  alt="PIXORA Studio canvas demo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {activeTab === 'splitter' && (
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-3 gap-2">
                    {Array.from({ length: 9 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="border border-[#FF7A1A] bg-[#FF7A1A]/15 rounded flex items-center justify-center backdrop-blur-[0.5px]"
                      >
                        <span className="text-[10px] font-mono font-bold bg-[#1A1A1A] text-white px-2 py-0.5 rounded">
                          Tile 0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'compressor' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#1A1A1A]/90 border border-[#FF7A1A] p-4 rounded-lg text-center backdrop-blur-md shadow-2xl">
                      <div className="text-2xl font-mono font-extrabold text-[#FF7A1A]">
                        -88% Size Reduction
                      </div>
                      <div className="text-xs text-white/80 mt-1 font-mono">
                        3.8 MB → 456 KB · Zero Perceptual Loss
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'resizer' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border-2 border-[#FF7A1A] border-dashed rounded bg-[#FF7A1A]/10 flex items-center justify-center">
                      <span className="text-xs font-mono bg-[#1A1A1A] text-white px-3 py-1 rounded">
                        1080 × 1080 · 1:1 Aspect Ratio
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'cropper' && (
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-full h-full border-2 border-white rounded relative">
                      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div className="border-r border-b border-white/40" />
                        <div />
                      </div>
                      <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-[#FF7A1A] text-white px-2 py-0.5 rounded font-bold">
                        Rule of Thirds Active
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between pt-3 text-xs text-white/60 font-mono">
                <span>Canvas Status: Ready</span>
                <Link to="/app" className="text-[#FF7A1A] hover:underline">
                  Launch Interactive Studio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;

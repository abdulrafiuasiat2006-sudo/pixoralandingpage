import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, LayoutGrid, Sliders, DownloadCloud, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Upload your image',
      subtitle: 'Fast, secure local file ingestion',
      description:
        'Drag and drop any standard image from your computer or mobile device directly into the workspace, or load one of our high-resolution demo samples to test immediately. Files never leave your browser.',
      details: [
        'Supported input formats: JPEG, PNG, WebP, AVIF, and SVG',
        'Automatic dimension and byte inspection',
        'Zero upload latency or server queuing',
      ],
      icon: Upload,
    },
    {
      step: '02',
      title: 'Choose the tool you need',
      subtitle: 'Seamless switching without re-uploading',
      description:
        'Select between Image Splitter, Image Compressor, Image Resizer, or Image Cropper using the unified top bar switcher. Your active canvas and loaded asset persist across all four tools.',
      details: [
        'Image Splitter for multi-tile grids and carousels',
        'Image Compressor for size and bandwidth optimization',
        'Image Resizer for pixel scaling and platform presets',
        'Image Cropper for framing and aspect ratio compositions',
      ],
      icon: LayoutGrid,
    },
    {
      step: '03',
      title: 'Adjust your settings',
      subtitle: 'Real-time interactive feedback',
      description:
        'Modify dimensions, quality thresholds, grid rows and columns, rotation angles, or zoom factors. The canvas updates dynamically to show you exact real-time results before you commit to downloading.',
      details: [
        'Interactive before-and-after split view for compression',
        'Overlay grid lines with tile dimensions',
        'Rule-of-thirds compositional framing markers',
      ],
      icon: Sliders,
    },
    {
      step: '04',
      title: 'Download your result',
      subtitle: 'Instant browser export with one click',
      description:
        'Export your finished work instantly. Download individual sliced tiles, a structured ZIP archive containing your entire grid mosaic, or compressed high-fidelity JPEG/WebP files directly to your Downloads folder.',
      details: [
        'Lossless and compressed options available',
        'Standard filename preservation and indexing',
        'Bulk ZIP generation for multi-tile splitter projects',
      ],
      icon: DownloadCloud,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <span>Workflow Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Your image. Your tool. Your result.
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">
            From raw camera asset to social-ready or web-optimized output in under thirty seconds. Here is how the complete transformation pipeline works.
          </p>
        </div>

        {/* Step-by-Step Detailed Sections */}
        <div className="space-y-12">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-[#FF7A1A]">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1A1A]">{item.title}</h2>
                    <span className="text-xs text-[#1A1A1A]/60 font-medium">{item.subtitle}</span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4 text-sm text-[#1A1A1A]/80 leading-relaxed">
                  <p>{item.description}</p>
                  <div className="pt-2 border-t border-[#1A1A1A]/10 space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
                        <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supported Format Specifications */}
        <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 space-y-6 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Supported Image Formats</h2>
            <p className="text-xs text-[#1A1A1A]/70 mt-1">
              PIXORA supports high-performance rendering across all major web and graphic formats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg">
              <div className="font-bold text-[#1A1A1A]">JPEG / JPG</div>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">Standard lossy format ideal for digital photography, social media, and camera files.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg">
              <div className="font-bold text-[#1A1A1A]">PNG</div>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">Lossless format retaining full alpha transparency, sharp typography, and vector icons.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg">
              <div className="font-bold text-[#1A1A1A]">WebP</div>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">Next-gen Google web standard providing superior compression with transparency support.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg">
              <div className="font-bold text-[#1A1A1A]">SVG / Vector</div>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">Scalable vector graphics rasterized smoothly onto canvas for sizing and slicing.</p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Experience the workflow for yourself</h2>
            <p className="text-sm text-white/70 max-w-md">
              Try slicing, compressing, resizing, or cropping with our interactive studio now.
            </p>
          </div>
          <Link
            to="/app"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            Open Workspace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

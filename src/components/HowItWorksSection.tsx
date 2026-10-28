import React from 'react';
import { Upload, LayoutGrid, Sliders, DownloadCloud } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload your image.',
      description: 'Drag and drop any image file (PNG, JPEG, WebP, SVG) or load instantly with one click.',
      icon: Upload,
    },
    {
      num: '02',
      title: 'Choose the tool you need.',
      description: 'Select Splitter, Compressor, Resizer, or Cropper depending on your immediate goal.',
      icon: LayoutGrid,
    },
    {
      num: '03',
      title: 'Adjust your settings.',
      description: 'Fine-tune dimensions, quality thresholds, grid tiles, or crop frame with real-time feedback.',
      icon: Sliders,
    },
    {
      num: '04',
      title: 'Download your result.',
      description: 'Save your polished single image, slice tiles, or compressed package directly to your device.',
      icon: DownloadCloud,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Your image. Your tool. Your result.
          </h2>
          <p className="text-lg text-[#1A1A1A]/75 leading-relaxed">
            Four simple steps from raw asset to finished output. No complex software learning curves or account prerequisites.
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connection line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-[2px] bg-[#1A1A1A]/10 -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-xl p-8 hover:border-[#FF7A1A]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-extrabold text-[#FF7A1A]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/50">
                  Instant Client Execution
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

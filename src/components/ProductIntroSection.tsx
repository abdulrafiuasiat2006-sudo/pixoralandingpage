import React from 'react';
import { ShieldCheck, Zap, Laptop, Layers } from 'lucide-react';

export const ProductIntroSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Local Browser Processing',
      description: 'Your images never get uploaded to third-party cloud servers. Every crop, split, compression, and resize happens directly on your machine.',
    },
    {
      icon: Zap,
      title: 'Zero Latency & No Queue',
      description: 'No waiting in export queues or watching upload progress bars. Canvas-accelerated transformations finish in milliseconds.',
    },
    {
      icon: Layers,
      title: 'Lossless Precision',
      description: 'Retain crisp detail, correct color profiles, and sharp edges across WebP, JPEG, and PNG formats without unwanted artifacts.',
    },
    {
      icon: Laptop,
      title: 'Universal Device Access',
      description: 'Fully responsive and lightweight. Works across desktop, tablet, and mobile browsers with zero software installs required.',
    },
  ];

  return (
    <section id="overview" className="py-20 md:py-28 border-y border-[#1A1A1A]/10 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            Product Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Everything you need to work with images.
          </h2>
          <p className="text-lg text-[#1A1A1A]/75 leading-relaxed">
            PIXORA brings four practical image tools into one convenient workspace, helping you prepare images for social media, websites, digital projects, and everyday use.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white/70 border border-[#1A1A1A]/10 rounded-lg p-6 hover:border-[#FF7A1A]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-[#1A1A1A]/40 mb-1">0{idx + 1}</div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductIntroSection;

import React from 'react';
import { Camera, Share2, Palette, Briefcase, GraduationCap, Users } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const audiences = [
    {
      icon: Camera,
      title: 'Content Creators',
      description: 'Quickly produce eye-catching tile grids, banners, and thumbnail assets without booting heavy photo editing suites.',
    },
    {
      icon: Share2,
      title: 'Social Media Users',
      description: 'Format photos perfectly for Instagram grids, TikTok cover frames, and multi-image carousels in exact platform proportions.',
    },
    {
      icon: Palette,
      title: 'Designers & Developers',
      description: 'Compress web assets to modern WebP formats and resize mockups without compromising pixel sharpness.',
    },
    {
      icon: Briefcase,
      title: 'Small Business Owners',
      description: 'Optimize product photography for e-commerce stores and reduce file sizes so product pages load quickly.',
    },
    {
      icon: GraduationCap,
      title: 'Students & Educators',
      description: 'Crop and scale diagrams, slide deck illustrations, and research figures cleanly for school reports and presentations.',
    },
    {
      icon: Users,
      title: 'Everyday Image Users',
      description: 'Simple, direct image adjustments for emailing photos, resizing profile pictures, and fixing framing in seconds.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A] mb-3">
            Built For Everyone
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Who is PIXORA for?
          </h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/75 leading-relaxed">
            Whether you are preparing a multi-panel social media campaign or resizing a single photo for an email, PIXORA removes the unnecessary complexity.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-xl p-8 hover:border-[#FF7A1A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is PIXORA?',
      answer:
        'PIXORA is a clean, modern web application that combines four essential image utility tools into one streamlined workspace: an Image Splitter, Image Compressor, Image Resizer, and Image Cropper. It runs directly inside your web browser without complex setup.',
    },
    {
      question: 'What image tools does PIXORA offer?',
      answer:
        'PIXORA offers four focused tools: (1) Image Splitter for slicing an image into grid tiles or carousel panels, (2) Image Compressor for reducing file sizes while preserving visual quality, (3) Image Resizer for adjusting exact pixel dimensions or preset platform ratios, and (4) Image Cropper for framing compositions with aspect ratio guides.',
    },
    {
      question: 'Can I split an image into multiple tiles?',
      answer:
        'Yes. With the Image Splitter, you can divide any uploaded image into custom grid dimensions, such as a 3×3 square mosaic for Instagram profiles or multi-panel panoramic carousel strips, and download either individual tiles or the entire set.',
    },
    {
      question: 'Can I compress images?',
      answer:
        'Yes. The Image Compressor allows you to adjust the quality threshold with a real-time slider to reduce file size significantly, convert between WebP, JPEG, and PNG formats, and see immediate file size calculations before exporting.',
    },
    {
      question: 'Can I resize and crop images?',
      answer:
        'Yes. The Image Resizer lets you scale images by exact pixel width and height or standard platform presets with aspect ratio locking. The Image Cropper enables you to focus on specific sections of your photo using preset aspect ratios (such as 1:1, 4:5, 16:9, and 9:16) with rule-of-thirds composition guides.',
    },
    {
      question: 'How do I access the tools?',
      answer:
        'All four tools are accessible in the PIXORA workspace. You can click "Get Started" from any section of this page or select any specific tool link to launch directly into that tool’s editing canvas.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Click the "Get Started" button in the navigation bar or hero section. You can upload any image from your device or load the built-in sample asset immediately to begin splitting, compressing, resizing, or cropping.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#1A1A1A]/70">
            Clear, honest answers about PIXORA and how each image tool works.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#1A1A1A]/10 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-black/[0.01]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1A1A1A] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF7A1A] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed border-t border-[#1A1A1A]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, HelpCircle, ArrowRight, Mail } from 'lucide-react';

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FaqItem[] = [
    {
      category: 'General',
      question: 'What is PIXORA?',
      answer:
        'PIXORA is a clean, modern web application that combines four essential image utility tools into one streamlined workspace: an Image Splitter, Image Compressor, Image Resizer, and Image Cropper. It operates entirely inside your web browser without complex software setup or recurring fees.',
    },
    {
      category: 'General',
      question: 'What image tools does PIXORA offer?',
      answer:
        'PIXORA offers four focused image utilities: (1) Image Splitter for slicing an image into grid tiles or carousel panels, (2) Image Compressor for reducing file sizes while maintaining visual clarity, (3) Image Resizer for adjusting exact pixel dimensions or preset platform ratios, and (4) Image Cropper for framing compositions with aspect ratio guides.',
    },
    {
      category: 'Splitter',
      question: 'Can I split an image into multiple tiles?',
      answer:
        'Yes. With the Image Splitter, you can divide any uploaded image into custom grid dimensions, such as a 3×3 square mosaic for Instagram profile aesthetics or multi-panel panoramic carousel strips (e.g. 3×1), and download either individual tiles or a complete ZIP package with one click.',
    },
    {
      category: 'Compressor',
      question: 'Can I compress images without visible quality loss?',
      answer:
        'Yes. The Image Compressor allows you to fine-tune quality thresholds with a continuous slider (10% to 98%). An 80% quality factor typically reduces byte size by 80-90% with virtually zero perceptible loss, allowing fast web uploads and reduced bandwidth.',
    },
    {
      category: 'Resizer & Cropper',
      question: 'Can I resize and crop images to specific platform dimensions?',
      answer:
        'Yes. The Image Resizer lets you scale images by exact pixel width and height or standard platform presets (Instagram 1080×1080, Stories/TikTok 1080×1920, YouTube 1280×720, Full HD 1920×1080) with aspect ratio locking. The Image Cropper enables you to focus on specific sections of your photo using preset aspect ratios with rule-of-thirds composition guides.',
    },
    {
      category: 'Privacy & Security',
      question: 'Are my uploaded images stored on your servers?',
      answer:
        'No. PIXORA is built around a client-side execution philosophy. All image manipulation, cropping, splitting, resizing, and compression happen directly on your device using HTML5 Canvas APIs. Your photos and media never get uploaded to any external server.',
    },
    {
      category: 'Getting Started',
      question: 'How do I access the tools?',
      answer:
        'All four tools are instantly accessible in the PIXORA workspace. You can click "Get Started" from any page or choose a specific tool directly from the navigation menu or footer to launch directly into that editing canvas.',
    },
    {
      category: 'Getting Started',
      question: 'How do I get started right now?',
      answer:
        'Simply click the "Get Started" button or visit "/app". You can drag and drop any image from your computer or choose from one of our built-in sample photos to begin splitting, compressing, resizing, or cropping immediately.',
    },
  ];

  const categories = ['All', 'General', 'Splitter', 'Compressor', 'Resizer & Cropper', 'Privacy & Security', 'Getting Started'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <HelpCircle className="w-4 h-4" />
            <span>Help Center & Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#1A1A1A]/75 max-w-xl mx-auto">
            Everything you need to know about PIXORA, our four image tools, client-side privacy, and best practices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-[#1A1A1A]/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. compress, split, privacy, formats)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-sm bg-white border border-[#1A1A1A]/15 rounded-xl focus:outline-none focus:border-[#FF7A1A] shadow-sm"
          />
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-black/5 rounded-xl max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-[#1A1A1A] shadow-sm font-bold'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-8 text-center text-sm text-[#1A1A1A]/60">
              No questions found matching your search. Try searching for &ldquo;split&rdquo;, &ldquo;compress&rdquo;, or &ldquo;privacy&rdquo;.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-[#1A1A1A]/10 rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-black/[0.01]"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[11px] font-mono text-[#FF7A1A] uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                        {faq.question}
                      </span>
                    </div>
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
            })
          )}
        </div>

        {/* Need more help contact box */}
        <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">Still have a question or suggestion?</h2>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md mx-auto">
            Visit our dedicated contact page to send us a direct message, report an issue, or suggest a feature.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black rounded-md transition-colors"
            >
              Go to Contact Page
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <FileText className="w-4 h-4" />
            <span>Usage Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-[#1A1A1A]/60 font-mono">
            Effective Date: October 2026 · PIXORA Platform Terms
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 space-y-8 text-[#1A1A1A]/80 text-sm leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the PIXORA web application (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">2. Permitted Use & Commercial License</h2>
            <p>
              You are granted a worldwide, royalty-free, non-exclusive license to use PIXORA to split, compress, resize, and crop images for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#1A1A1A]/70">
              <li>Personal creative projects, photography portfolios, and social media feeds.</li>
              <li>Commercial marketing materials, client deliverables, advertising banners, and e-commerce product catalogs.</li>
              <li>Educational coursework, presentations, research publications, and non-profit initiatives.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">3. Intellectual Property Rights & Ownership</h2>
            <div className="p-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF7A1A] shrink-0 mt-0.5" />
              <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                <strong>You retain 100% complete, unencumbered ownership</strong> of all original image assets you load into PIXORA, as well as all resulting output files, split tiles, compressed assets, and crops. PIXORA asserts zero intellectual property claims or licenses over your content.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">4. User Responsibility & Content Legality</h2>
            <p>
              You represent and warrant that you possess all necessary legal permissions, rights, and releases for any photography, graphic design, or artwork you process using PIXORA, and that your use does not infringe upon any third party copyright, trademark, or privacy rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied. While our algorithms are thoroughly engineered to maximize visual quality and prevent artifacting, users are advised to retain original archival backups of their raw images.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">6. Modifications & Contact</h2>
            <p>
              We reserve the right to refine these Terms to reflect technical enhancements or statutory updates. For inquiries or commercial inquiries, reach out through our{' '}
              <Link to="/contact" className="text-[#FF7A1A] font-semibold underline">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>

        {/* Return Links */}
        <div className="flex items-center justify-between pt-4">
          <Link
            to="/privacy-policy"
            className="text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#FF7A1A] transition-colors"
          >
            ← View Privacy Policy
          </Link>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors"
          >
            Launch PIXORA Studio
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

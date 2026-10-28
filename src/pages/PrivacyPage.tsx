import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, ServerOff, ArrowRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#1A1A1A]/60 font-mono">
            Last Updated: October 2026 · Dedicated Client-Side Guarantee
          </p>
        </div>

        {/* Core Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-5 space-y-2">
            <ServerOff className="w-6 h-6 text-[#FF7A1A]" />
            <h3 className="font-bold text-[#1A1A1A] text-sm">No Server Uploads</h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
              Your images remain strictly inside your browser sandbox and never reach any external servers.
            </p>
          </div>
          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-5 space-y-2">
            <EyeOff className="w-6 h-6 text-[#FF7A1A]" />
            <h3 className="font-bold text-[#1A1A1A] text-sm">Zero Data Collection</h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
              We do not track, log, analyze, or fingerprint your creative assets or original images.
            </p>
          </div>
          <div className="bg-white border border-[#1A1A1A]/10 rounded-xl p-5 space-y-2">
            <Lock className="w-6 h-6 text-[#FF7A1A]" />
            <h3 className="font-bold text-[#1A1A1A] text-sm">Local Execution</h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
              All pixel rendering, splitting, compression, and cropping run via native HTML5 Canvas APIs.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 space-y-8 text-[#1A1A1A]/80 text-sm leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">1. Overview & Architecture Philosophy</h2>
            <p>
              PIXORA operates under a zero-cloud-retention architectural philosophy. Unlike legacy online conversion portals that require you to transmit photos to remote hosting infrastructure, PIXORA executes all transformations directly inside your browser tab on your personal computer or mobile device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">2. Image Data Handling & Storage</h2>
            <p>
              When you load, split, compress, resize, or crop an image:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#1A1A1A]/70">
              <li>Image buffers are instantiated exclusively in local memory (RAM) via JavaScript File and Canvas APIs.</li>
              <li>No copies, thumbnails, metadata extracts, or backups are transmitted over HTTP/S to any remote server or third-party cloud bucket.</li>
              <li>Closing the browser tab completely purges all in-memory image representations from your device.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">3. Account Data & Local Storage</h2>
            <p>
              If you optionally sign in or save session preferences, authentication tokens and display configurations are saved locally via standard browser localStorage. You have complete autonomy to clear your browser data or log out at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">4. Third-Party Trackers & Telemetry</h2>
            <p>
              PIXORA contains zero advertising trackers, zero invasive behavioral analytics, and zero social media tracking pixels. We respect your focus and do not sell, license, or monetize any user interactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1A1A1A]">5. Inquiries Regarding Privacy</h2>
            <p>
              If you have any questions or require formal confirmation of our client-side architecture for enterprise or organizational compliance, please contact us through our dedicated{' '}
              <Link to="/contact" className="text-[#FF7A1A] font-semibold underline">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>

        {/* Return to App */}
        <div className="flex items-center justify-between pt-4">
          <Link
            to="/terms"
            className="text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#FF7A1A] transition-colors"
          >
            ← View Terms of Service
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

export default PrivacyPage;

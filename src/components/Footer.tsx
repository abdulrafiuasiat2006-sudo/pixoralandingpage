import React from 'react';
import { Link } from 'react-router-dom';
import { PixoraLogo, PixoraIcon } from './PixoraLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F3] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block" aria-label="PIXORA Home">
              <PixoraLogo variant="light" size="md" />
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              PIXORA brings four essential image tools together into one simple workspace. Split, compress, resize, and crop images with speed, precision, and privacy.
            </p>
            <div className="text-xs text-white/50 font-mono">
              Client-Side Browser Execution · Zero Cloud Storage
            </div>
          </div>

          {/* Nav Links Col 1: Tools */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A1A]">
              Essential Tools
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/tools/splitter" className="hover:text-[#FF7A1A] transition-colors block">
                  Image Splitter
                </Link>
              </li>
              <li>
                <Link to="/tools/compressor" className="hover:text-[#FF7A1A] transition-colors block">
                  Image Compressor
                </Link>
              </li>
              <li>
                <Link to="/tools/resizer" className="hover:text-[#FF7A1A] transition-colors block">
                  Image Resizer
                </Link>
              </li>
              <li>
                <Link to="/tools/cropper" className="hover:text-[#FF7A1A] transition-colors block">
                  Image Cropper
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A1A]">
              Pages
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/overview" className="hover:text-[#FF7A1A] transition-colors block">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#FF7A1A] transition-colors block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#FF7A1A] transition-colors block">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF7A1A] transition-colors block">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF7A1A] transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Account */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF7A1A]">
              Legal & Account
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#FF7A1A] transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#FF7A1A] transition-colors block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#FF7A1A] transition-colors block">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#FF7A1A] transition-colors block">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <PixoraIcon size={18} />
            <span>&copy; {new Date().getFullYear()} PIXORA. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Built for Creators & Professionals</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

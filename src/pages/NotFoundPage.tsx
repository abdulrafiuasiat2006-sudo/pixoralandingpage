import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { PixoraIcon } from '../components/PixoraLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FAF8F3] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] text-[#FF7A1A] flex items-center justify-center mx-auto shadow-md">
          <PixoraIcon size={36} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-[#FF7A1A] font-bold uppercase tracking-widest">
            Error 404 · Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Lost your coordinates?
          </h1>
          <p className="text-sm text-[#1A1A1A]/70 max-w-sm mx-auto leading-relaxed">
            The page you requested does not exist or has been moved to a new URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black rounded-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/app"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Image Studio</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/60 flex flex-wrap justify-center gap-4">
          <Link to="/overview" className="hover:text-[#FF7A1A]">Overview</Link>
          <span>·</span>
          <Link to="/features" className="hover:text-[#FF7A1A]">Features</Link>
          <span>·</span>
          <Link to="/how-it-works" className="hover:text-[#FF7A1A]">How It Works</Link>
          <span>·</span>
          <Link to="/faq" className="hover:text-[#FF7A1A]">FAQ</Link>
          <span>·</span>
          <Link to="/contact" className="hover:text-[#FF7A1A]">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

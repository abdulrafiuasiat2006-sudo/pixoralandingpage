import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { PixoraLogo } from './PixoraLogo';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Overview', to: '/overview' },
    { label: 'Features', to: '/features' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-[0_4px_20px_-10px_rgba(26,26,26,0.06)]'
          : 'bg-[#FAF8F3] border-b border-[#1A1A1A]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            aria-label="PIXORA Home"
          >
            <PixoraLogo size="md" />
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A1A1A]/80">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
                    isActive
                      ? 'text-[#FF7A1A] font-semibold border-b-2 border-[#FF7A1A]'
                      : 'hover:text-[#FF7A1A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          {user && (
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <span className="text-xs text-[#1A1A1A]/70 font-medium flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#FF7A1A]" />
                {user.name}
              </span>
              <button
                onClick={onLogout}
                className="text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors font-medium px-2 py-1 cursor-pointer"
              >
                Log out
              </button>
            </div>
          )}

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:text-[#FF7A1A] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1A1A1A]/10 bg-[#FAF8F3] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                location.pathname === '/' ? 'text-[#FF7A1A] font-bold bg-[#FF7A1A]/5' : 'text-[#1A1A1A]'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === link.to
                    ? 'text-[#FF7A1A] font-bold bg-[#FF7A1A]/5'
                    : 'text-[#1A1A1A] hover:text-[#FF7A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2.5">
            {user ? (
              <>
                <div className="text-xs text-[#1A1A1A]/70 px-3 py-1">Signed in as {user.name}</div>
                <Link
                  to="/app"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF7A1A] rounded-md hover:bg-[#e66c14]"
                >
                  Go to Workspace
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onLogout}
                  className="w-full text-center py-2 text-xs text-[#1A1A1A]/60 cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2.5 text-sm font-medium text-[#1A1A1A] border border-[#1A1A1A]/20 rounded-md hover:bg-black/5"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center px-4 py-2.5 text-sm font-medium text-[#1A1A1A] border border-[#1A1A1A]/20 rounded-md hover:bg-black/5"
                >
                  Create Account
                </Link>
                <Link
                  to="/app"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF7A1A] rounded-md hover:bg-[#e66c14]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

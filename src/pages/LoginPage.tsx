import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PixoraLogo } from '../components/PixoraLogo';
import { UserProfile } from '../types';

interface LoginPageProps {
  onLogin: (user: UserProfile) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide both your email address and password.');
      return;
    }

    const user: UserProfile = {
      email,
      name: email.split('@')[0] || 'Pixora Creator',
      isGuest: false,
    };
    onLogin(user);
    navigate('/app');
  };

  const handleDemoLogin = () => {
    const user: UserProfile = {
      email: 'creator@pixora.studio',
      name: 'Alex Rivera',
      isGuest: false,
    };
    onLogin(user);
    navigate('/app');
  };

  const handleGuestAccess = () => {
    const user: UserProfile = {
      email: 'guest@pixora.local',
      name: 'Guest Creator',
      isGuest: true,
    };
    onLogin(user);
    navigate('/app');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF8F3] flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#FF7A1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-3">
              <PixoraLogo size="md" />
            </div>
            <h1 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight">
              Sign In to PIXORA
            </h1>
            <p className="text-xs text-[#1A1A1A]/70">
              Access your workspace, saved dimensions, and high-speed tools.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-[#1A1A1A]">
                  Password
                </label>
                <span className="text-[11px] text-[#1A1A1A]/50">Min 6 characters</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-[#1A1A1A]/80">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#FF7A1A] focus:ring-[#FF7A1A]"
                />
                <span>Remember me on this device</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo & Guest Links */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-2.5">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2.5 px-3 text-xs font-semibold text-[#1A1A1A] bg-[#FAF8F3] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>Sign In with Demo Account (Instant)</span>
            </button>

            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full py-2 text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors cursor-pointer text-center block"
            >
              Skip login & continue as Guest →
            </button>
          </div>

          <div className="text-center pt-2 text-xs text-[#1A1A1A]/70">
            Don&rsquo;t have an account yet?{' '}
            <Link to="/register" className="text-[#FF7A1A] font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

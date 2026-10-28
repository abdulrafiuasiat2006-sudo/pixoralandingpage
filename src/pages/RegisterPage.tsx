import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PixoraLogo } from '../components/PixoraLogo';
import { UserProfile } from '../types';

interface RegisterPageProps {
  onRegister: (user: UserProfile) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in your name, email address, and password.');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }
    if (!agreed) {
      setError('You must accept the Terms of Service and Privacy Policy to create an account.');
      return;
    }

    const user: UserProfile = {
      name,
      email,
      isGuest: false,
    };
    onRegister(user);
    navigate('/app');
  };

  const handleGuestAccess = () => {
    const user: UserProfile = {
      email: 'guest@pixora.local',
      name: 'Guest Creator',
      isGuest: true,
    };
    onRegister(user);
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
              Create Your PIXORA Account
            </h1>
            <p className="text-xs text-[#1A1A1A]/70">
              Join creators and designers using PIXORA for everyday image tasks.
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
                Your Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                />
              </div>
            </div>

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
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                Create Password
              </label>
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

            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#1A1A1A]/80 leading-snug">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded text-[#FF7A1A] focus:ring-[#FF7A1A] mt-0.5"
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#FF7A1A] underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-[#FF7A1A] underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors shadow-sm cursor-pointer mt-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Guest Link */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 text-center space-y-2">
            <button
              type="button"
              onClick={handleGuestAccess}
              className="text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Or start using tools immediately as a Guest →
            </button>

            <div className="pt-2 text-xs text-[#1A1A1A]/70">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF7A1A] font-bold hover:underline">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

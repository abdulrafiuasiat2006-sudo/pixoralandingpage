import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Globe, Sparkles } from 'lucide-react';
import { PixoraLogo } from '../components/PixoraLogo';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Feedback');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A]">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Contact & Creator Feedback
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">
            Have a suggestion for a new image tool, noticed a bug, or want to share feedback? We review all submissions directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A]">Communication Channels</h2>
              <div className="space-y-4 text-sm text-[#1A1A1A]/80">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#1A1A1A]/10 text-[#FF7A1A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#1A1A1A]">Direct Email</span>
                    <span className="text-xs text-[#1A1A1A]/60">support@pixora.studio</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#1A1A1A]/10 text-[#FF7A1A] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#1A1A1A]">Online Platform</span>
                    <span className="text-xs text-[#1A1A1A]/60">https://pixora.studio</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#1A1A1A]/10 text-[#FF7A1A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#1A1A1A]">Global Architecture</span>
                    <span className="text-xs text-[#1A1A1A]/60">Client-Side Edge Distribution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 space-y-4">
              <span className="text-xs font-mono text-[#FF7A1A] uppercase tracking-wider">
                Support Commitment
              </span>
              <h3 className="text-lg font-bold">100% Human Review</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Whether you are requesting a specific image preset (like Pinterest pins or LinkedIn banners) or reporting an unusual image file error, we respond to feedback quickly.
              </p>
            </div>
          </div>

          {/* Right Side: Form (Dedicated Page, No Pop-ups!) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A]">Message Received!</h2>
                  <p className="text-sm text-[#1A1A1A]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A1A1A]">{name}</strong>. Your feedback regarding &ldquo;{topic}&rdquo; has been registered. We appreciate your input.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black rounded-md transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#1A1A1A]">Send a Message</h2>
                    <p className="text-xs text-[#1A1A1A]/60 mt-1">
                      Complete the fields below to submit your feedback or technical question.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Rivera"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        Topic Category
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                      >
                        <option value="Feedback">General Feedback</option>
                        <option value="Feature Request">Tool / Preset Request</option>
                        <option value="Bug Report">Technical Bug Report</option>
                        <option value="Partnership">Partnership / Integration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        placeholder="Brief summary..."
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your thoughts or describe your experience with PIXORA..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#1A1A1A]/20 rounded-lg focus:outline-none focus:border-[#FF7A1A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF7A1A] hover:bg-[#e66c14] rounded-md transition-colors cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

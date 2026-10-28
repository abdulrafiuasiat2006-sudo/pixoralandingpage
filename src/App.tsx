import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Workspace from './components/Workspace';
import { UserProfile } from './types';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('pixora_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLoginSuccess = (loggedUser: UserProfile) => {
    setUser(loggedUser);
    try {
      localStorage.setItem('pixora_user', JSON.stringify(loggedUser));
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('pixora_user');
    } catch {
      // ignore
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Full-Screen Workspace Routes */}
        <Route path="/app" element={<Workspace user={user} />} />
        <Route path="/app/:tool" element={<Workspace user={user} />} />
        <Route path="/tools/:tool" element={<Workspace user={user} />} />

        {/* Marketing Multi-Page Layout Routes */}
        <Route element={<MainLayout user={user} onLogout={handleLogout} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage onRegister={handleLoginSuccess} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

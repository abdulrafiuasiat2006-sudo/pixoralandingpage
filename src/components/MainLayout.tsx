import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { UserProfile } from '../types';

interface MainLayoutProps {
  user: UserProfile | null;
  onLogout: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#FF7A1A] selection:text-white">
      <Navbar user={user} onLogout={onLogout} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from 'react';
import "./globals.css";
import Header from '../components/header';
import Banner from '@/components/banner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner />
      {/* Other components */}
    </div>
  );
};

export default Layout;

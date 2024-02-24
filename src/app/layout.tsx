"use client"

import React from 'react';
import "./globals.css";
import Header from '../components/header';
import Banner from '@/components/banner';
import Popular from '@/components/popular';
import BrandName1 from '@/components/brandname1';
import Banner2 from '@/components/banner2';
import Lastsneaker from '@/components/lastsneaker';
import BrandName2 from '@/components/brandname2';
import Banner3 from '@/components/banner3';
import BrandList from '@/components/brandlist';
import Features from '@/components/features';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner />
      <Popular />
      <BrandName1 />
      <Banner2 />
      <Lastsneaker />
      <BrandName2 />
      <Banner3 />
      <BrandList />
      <Features />
      <Contact />
      <Footer />
      {/* Other components */}
    </div>
  );
};

export default Layout;

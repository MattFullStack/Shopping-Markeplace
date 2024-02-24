import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed justify-end to align all h5 headings consistently */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-medium mb-8">Categories</h5>
            <ul className="font-light">
              <li className="mb-4">Latest</li>
              <li className="mb-4">Brands</li>
              <li className="mb-4">Women</li>
              <li className="mb-4">Men</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-8">Links</h5>
            <ul className="font-light">
              <li className="mb-4">Stores</li>
              <li className="mb-4">Cookies</li>
              <li className="mb-4">Customer Service</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-8">About</h5>
            <ul className="font-light">
              <li className="mb-4">FAQ</li>
              <li className="mb-4">Instagram</li>
              <li className="mb-4">TikTok</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-8">Payment</h5>
            <ul className="font-light">
              <li className="mb-4">VISA</li>
              <li className="mb-4">Apple Pay</li>
              <li className="mb-4">PayPal</li>
              <li className="mb-4">Klarna</li>
            </ul>
          </div>
        </div>
        <div className="text-center font-light pt-20">
          <p>©Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

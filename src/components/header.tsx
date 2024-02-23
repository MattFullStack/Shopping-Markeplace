import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow font-sans ">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*LOGO*/}
        <div className="flex justify-between items-center py-6">
          <div className="text-5xl font-bold text-gray-900 mb-4">Glaze</div>
          {/* RCP Right side */}
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Recherche</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Compte</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Panier</a>
          </div>
        </div>
        {/* NAVBAR */}
        <nav className="flex justify-normal space-x-8 pt-20 py-4 border-b-1 border-gray-400">
          <a href="#" className="text-gray-600 hover:text-gray-900">New in</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Vêtements</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Footwear</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Accessoires</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Outlet</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

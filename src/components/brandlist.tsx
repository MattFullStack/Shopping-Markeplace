import React from 'react';

const BrandList: React.FC = () => {
  // Add your brand names here
  const brands = [
    'ADIDAS', 'BIRKENSTOCK', 'NIKE', 'CROCS',
    'THE NORTH FACE', 'TOPSHOP', 'LEVI’S',
    'SALOMON', 'LACOSTE', 'PATAGONIA', 'VOIR TOUT'
  ];

  return (
    <div className="py-10 pb-20"> {/* Padding top and bottom for the component */}
      <h2 className="text-xl font-medium mb-12 pb-8 text-center px-4 sm:px-6 lg:px-8">Marques tendances</h2>
      <div className="text-center grid grid-cols-4 gap-2 gap-x-0 gap-y-4"> {/* Grid with 4 columns and gap */}
        {brands.map((brand, index) => (
          <span key={index} className="text-lg font-light mb-4">{brand}</span> 
        ))}
      </div>
    </div>
  );
};

export default BrandList;


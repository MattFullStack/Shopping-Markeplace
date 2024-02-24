import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className=""> {/* Increased top margin for more space mt-32*/}
      <div className="flex">
        {/* Category Femmes */}
        <div className="relative w-1/2">
          <img src="brandname6.jpg" alt="Femmes" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-semibold">Femmes</span>
          </div>
        </div>

        {/* Category Hommes */}
        <div className="relative w-1/2">
          <img src="men2.jpg" alt="Hommes" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-semibold">Hommes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 mt-8 p-8">
      {/* Category Femmes */}
      <div className="w-1/2 p-4 flex justify-center items-center bg-white">
      <img src="women1.jpg" alt="Femmes" />
        {/* You would place your image here using an img tag */}
        <div className="text-2xl font-semibold">Femmes</div>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-300" />

      {/* Category Hommes */}
      <div className="w-1/2 p-4 flex justify-center items-center bg-white">
      <img src="men1.jpg" alt="Hommes" />
        <div className="text-2xl font-semibold">Hommes</div>
      </div>
    </div>
  );
};

export default Banner;

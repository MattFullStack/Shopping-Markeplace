import React from 'react';

const BrandName2: React.FC = () => {
  return (
    <div className="py-20"> {/* Padding top and bottom for the entire component */}
      <h2 className="text-xl font-medium mb-12 text-left px-4 sm:px-6 lg:px-8">Colombia</h2> {/* Align text to the left and add horizontal padding */}
      <div className="flex justify-between items-center mx-6"> {/* Added horizontal margin */}
        <div className="w-1/2 px-2"> {/* Added padding and ensure equal width */}
          <img src="brandname3.jpg" alt="Colombia Left" className="w-full h-full object-cover" style={{ aspectRatio: '3 / 4' }} />
        </div>
        <div className="w-1/2 px-2"> {/* Ensure equal width and padding */}
          <img src="brandname7.jpg" alt="Colombia Right" className="w-full h-full object-cover" style={{ aspectRatio: '3 / 4' }} />
        </div>
      </div>
    </div>
  );
};

export default BrandName2;

import React from 'react';

const BrandName1: React.FC = () => {
  return (
    <div className="py-20"> {/* Padding top and bottom for the entire component */}
      <h2 className="text-xl font-medium mb-12 text-left px-4 sm:px-6 lg:px-8">Arte Antwerp</h2> {/* Align text to the left and add horizontal padding */}
      <div className="flex justify-between items-center mx-6"> {/* Added horizontal margin */}
        <div className="w-1/2 px-2"> {/* Added padding */}
          <img src="brandname1.jpg" alt="Arte Antwerp Left" className="w-full h-auto object-cover" />
        </div>
        <div className="w-1/2 px-2"> {/* Added padding */}
          <img src="brandname2.jpg" alt="Arte Antwerp Right" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BrandName1;






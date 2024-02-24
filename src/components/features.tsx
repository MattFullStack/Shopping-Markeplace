import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8"> {/* Padding top and bottom for the component */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {/* Two columns for mobile, four for larger screens */}
        {/* Each feature item */}
        <div className="border p-16 text-center">
          <h3 className="font-semilight mb-2">Livraison offerte</h3>
          {/* Icon or image can go here */}
          <p className='font-light pt-2'>Description or additional details</p>
        </div>
        <div className="border p-16 text-center">
          <h3 className="font-semilight mb-2">Retours offerts</h3>
          {/* Icon or image can go here */}
          <p className='font-light pt-2'>Description or additional details</p>
        </div>
        <div className="border p-16 text-center">
          <h3 className="font-semilight mb-2">Click and Collect</h3>
          {/* Icon or image can go here */}
          <p className='font-light pt-2'>Description or additional details</p>
        </div>
        <div className="border p-16 text-center">
          <h3 className="font-semilight mb-2">Avantages Environnement</h3>
          {/* Icon or image can go here */}
          <p className='font-light pt-2'>Description or additional details</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

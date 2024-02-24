import React from 'react';

const Lastsneaker: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-black pt-20 pb-2 text-xl font-medium mb-6 ml-8">Sneakers du moment</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-8"> 
        <div className="px-2"> 
          <img src="sneaker1.jpg" alt="Product 1" className="w-full h-auto"/>
        </div>
        <div className="px-2">
          <img src="sneaker2.jpg" alt="Product 2" className="w-full h-auto"/>
        </div>
        <div className="px-2">
          <img src="sneaker3.jpg" alt="Product 3" className="w-full h-auto"/>
        </div>
        <div className="px-2">
          <img src="sneaker4.jpg" alt="Product 4" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Lastsneaker;

import React from 'react';

const Banner3: React.FC = () => {
  return (
    <div className="py-20 pt-40 pb-20 relative overflow-hidden"> 
      <img 
        src="bannermid7.jpg" 
        alt="Banner3" 
        className="w-full object-cover" 
        style={{ maxHeight: '40vh' }} // Adjust the max-height as needed
      />
    </div>
  );
};

export default Banner3;

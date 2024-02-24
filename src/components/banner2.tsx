import React from 'react';

const Banner2: React.FC = () => {
  return (
    <div className="py-20 pt-40 pb-20 relative overflow-hidden"> 
      <img 
        src="bannermid3.jpg" 
        alt="Banner2" 
        className="w-full object-cover" 
        style={{ maxHeight: '40vh' }} // Adjust the max-height as needed
      />
    </div>
  );
};

export default Banner2;

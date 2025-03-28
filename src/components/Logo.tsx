import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="https://assets.co.dev/96f77038-8ef2-4350-be52-4912f83b3206/colsee-logo-6287e90.png"
        alt="Colsee Paints Logo"
        width={250}
        height={85}
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
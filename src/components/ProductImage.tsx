import React from 'react';

type ProductImageProps = {
  type: string;
  category: string;
  name: string;
  className?: string;
};

// Function to generate a gradient based on product type and category
const getGradient = (type: string, category: string): string => {
  if (type === "Marine") {
    switch (category) {
      case "Base Coat":
        return "from-red-500 to-red-700";
      case "Tie Coat":
        return "from-green-500 to-green-700";
      case "Top Coat":
        return "from-blue-500 to-blue-700";
      default:
        return "from-cyan-500 to-blue-700";
    }
  } else {
    switch (category) {
      case "Interior":
        return "from-amber-500 to-orange-700";
      case "Interior/Exterior":
        return "from-purple-500 to-pink-700";
      case "Primer":
        return "from-gray-500 to-gray-700";
      default:
        return "from-indigo-500 to-purple-700";
    }
  }
};

// Function to get initials from product name
const getInitials = (name: string): string => {
  const words = name.split(' ');
  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`;
  }
  return name.slice(0, 2).toUpperCase();
};

const ProductImage: React.FC<ProductImageProps> = ({ type, category, name, className = '' }) => {
  const gradient = getGradient(type, category);
  const initials = getInitials(name);

  return (
    <div 
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="text-white text-3xl font-bold">
        {initials}
      </div>
      <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
        {type}
      </div>
    </div>
  );
};

export default ProductImage; 
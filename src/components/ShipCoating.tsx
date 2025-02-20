import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductDialog from './ProductDialog';

const ShipCoating = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const coatingLayers = [
    {
      name: 'Top Coat',
      color: 'bg-blue-500/80',
      delay: 0.6,
      description: 'Advanced protective finish that provides excellent UV resistance and long-lasting gloss retention.',
      features: [
        'Superior weather resistance',
        'Excellent color retention',
        'Enhanced gloss finish',
        'UV protection',
        'Chemical resistance'
      ]
    },
    {
      name: 'Mid Coat',
      color: 'bg-red-500/80',
      delay: 0.4,
      description: 'High-build epoxy coating that provides exceptional barrier protection against corrosive environments.',
      features: [
        'Superior corrosion resistance',
        'High build properties',
        'Excellent adhesion',
        'Impact resistance',
        'Chemical resistance'
      ]
    },
    {
      name: 'Primer',
      color: 'bg-gray-500/80',
      delay: 0.2,
      description: 'Specially formulated primer that ensures excellent adhesion and corrosion protection.',
      features: [
        'Superior adhesion properties',
        'Corrosion inhibition',
        'Fast drying',
        'Easy application',
        'Surface tolerant'
      ]
    },
    {
      name: 'Steel Base',
      color: 'bg-zinc-800/80',
      delay: 0,
      description: 'The foundation of the marine vessel, properly prepared for maximum coating system performance.',
      features: [
        'Surface preparation standards',
        'Blast cleaning profile',
        'Structural integrity',
        'Quality inspection',
        'Material certification'
      ]
    },
  ];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="https://assets.co.dev/96f77038-8ef2-4350-be52-4912f83b3206/shiphull2-fe8724f.webp"
        alt="Ship Hull"
        fill
        className="object-cover"
        priority
      />
      
      {/* Coating Layers */}
      <div className="absolute right-8 top-8 w-[300px]">
        {coatingLayers.map((layer, index) => (
          <motion.div
            key={layer.name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: layer.delay,
              ease: "easeOut"
            }}
            onClick={() => setSelectedProduct(index)}
            className="relative mb-3 cursor-pointer group"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.2,
                delay: layer.delay + 0.3,
                ease: "easeInOut"
              }}
              className={`h-14 ${layer.color} rounded-lg relative overflow-hidden 
                backdrop-blur-sm group-hover:brightness-110 transition-all`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: layer.delay + 1
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-semibold"
              >
                {layer.name}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Product Dialog */}
      {selectedProduct !== null && (
        <ProductDialog
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          product={coatingLayers[selectedProduct]}
        />
      )}
    </div>
  );
};

export default ShipCoating;